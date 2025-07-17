import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.inlineRegenerate', () => {
        vscode.window.showInformationMessage('inlineRegenerate not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
