import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.acceptReject', () => {
        vscode.window.showInformationMessage('acceptReject not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
