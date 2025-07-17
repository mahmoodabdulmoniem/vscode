import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.generateDiff', () => {
        vscode.window.showInformationMessage('generateDiff not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
