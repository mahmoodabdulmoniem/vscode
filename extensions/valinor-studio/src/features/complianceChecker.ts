import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.complianceChecker', () => {
        vscode.window.showInformationMessage('complianceChecker not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
