import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.indexMemory', () => {
        vscode.window.showInformationMessage('indexMemory not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
