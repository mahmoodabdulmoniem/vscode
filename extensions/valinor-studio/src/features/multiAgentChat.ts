import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.multiAgentChat', () => {
        vscode.window.showInformationMessage('multiAgentChat not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
