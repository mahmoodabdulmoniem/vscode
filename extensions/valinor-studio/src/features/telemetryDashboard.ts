import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.telemetryDashboard', () => {
        vscode.window.showInformationMessage('telemetryDashboard not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
