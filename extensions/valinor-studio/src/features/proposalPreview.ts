import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.proposalPreview', () => {
        vscode.window.showInformationMessage('proposalPreview not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
