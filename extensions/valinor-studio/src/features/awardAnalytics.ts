import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.awardAnalytics', () => {
        vscode.window.showInformationMessage('awardAnalytics not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
