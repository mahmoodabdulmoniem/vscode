import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.documentInsertion', () => {
        vscode.window.showInformationMessage('documentInsertion not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
