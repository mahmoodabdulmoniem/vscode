import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.keyboardShortcuts', () => {
        vscode.window.showInformationMessage('keyboardShortcuts not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
