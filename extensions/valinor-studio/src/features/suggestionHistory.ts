import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.suggestionHistory', () => {
        vscode.window.showInformationMessage('suggestionHistory not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
