import * as vscode from 'vscode';
import { registerAll } from './features';

export function activate(context: vscode.ExtensionContext) {
    registerAll(context);
}

export function deactivate() {}
