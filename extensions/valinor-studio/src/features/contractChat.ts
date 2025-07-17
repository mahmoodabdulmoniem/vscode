import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.contractChat', () => {
        vscode.window.showInformationMessage('contractChat not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
