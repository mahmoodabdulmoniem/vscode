import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.businessMatching', () => {
        vscode.window.showInformationMessage('businessMatching not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
