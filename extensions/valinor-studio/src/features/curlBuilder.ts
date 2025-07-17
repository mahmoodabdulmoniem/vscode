import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.curlBuilder', () => {
        vscode.window.showInformationMessage('curlBuilder not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
