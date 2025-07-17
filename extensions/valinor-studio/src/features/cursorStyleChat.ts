import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.cursorStyleChat', () => {
        vscode.window.showInformationMessage('cursorStyleChat not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
