/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CancellationToken } from '../../../base/common/cancellation.js';
import { Disposable, DisposableMap } from '../../../base/common/lifecycle.js';
import { ILogService } from '../../../platform/log/common/log.js';
import { IChatSessionContent, IChatSessionsProvider, IChatSessionsService } from '../../contrib/chat/common/chatSessionsService.js';
import { extHostNamedCustomer, IExtHostContext } from '../../services/extensions/common/extHostCustomers.js';
import { ExtHostContext, MainContext, MainThreadChatSessionsShape } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadChatSessions)
export class MainThreadChatSessions extends Disposable implements MainThreadChatSessionsShape {
	private readonly _registrations = this._register(new DisposableMap<number>());

	constructor(
		private readonly _extHostContext: IExtHostContext,
		@IChatSessionsService private readonly _chatSessionsService: IChatSessionsService,
		@ILogService private readonly _logService: ILogService,
	) {
		super();
	}

	$registerChatSessionsProvider(handle: number): void {
		// Register the provider handle - this tracks that a provider exists
		const provider: IChatSessionsProvider = {
			provideChatSessions: (token) => this._provideChatSessionsInformation(handle, token)
		};
		this._registrations.set(handle, this._chatSessionsService.registerChatSessionsProvider(handle, provider));
	}

	private async _provideChatSessionsInformation(handle: number, token: CancellationToken): Promise<IChatSessionContent[]> {
		const proxy = this._extHostContext.getProxy(ExtHostContext.ExtHostChatSessions);

		try {
			// Get all results as an array from the RPC call
			return await proxy.$provideChatSessions(handle, token);
		} catch (error) {
			this._logService.error('Error providing chat sessions:', error);
		}
		return [];
	}

	$unregisterChatSessionsProvider(handle: number): void {
		this._registrations.deleteAndDispose(handle);
	}
}
