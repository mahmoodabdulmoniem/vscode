import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.chatPane', () => {
        vscode.window.showInformationMessage('chatPane not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
