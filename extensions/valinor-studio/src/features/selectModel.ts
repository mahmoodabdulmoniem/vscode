import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.selectModel', () => {
        vscode.window.showInformationMessage('selectModel not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
