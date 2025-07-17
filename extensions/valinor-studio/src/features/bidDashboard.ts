import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.bidDashboard', () => {
        vscode.window.showInformationMessage('bidDashboard not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
