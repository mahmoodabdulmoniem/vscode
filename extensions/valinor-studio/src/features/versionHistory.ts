import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.versionHistory', () => {
        vscode.window.showInformationMessage('versionHistory not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
