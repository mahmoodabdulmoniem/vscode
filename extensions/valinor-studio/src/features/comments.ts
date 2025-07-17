import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.comments', () => {
        vscode.window.showInformationMessage('comments not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
