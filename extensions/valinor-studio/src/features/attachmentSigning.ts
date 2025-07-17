import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.attachmentSigning', () => {
        vscode.window.showInformationMessage('attachmentSigning not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
