import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.importRFP', () => {
        vscode.window.showInformationMessage('importRFP not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
