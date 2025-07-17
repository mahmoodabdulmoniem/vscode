import * as vscode from 'vscode';

export function register(context: vscode.ExtensionContext) {
    const cmd = vscode.commands.registerCommand('valinor.pricingValidation', () => {
        vscode.window.showInformationMessage('pricingValidation not implemented yet.');
    });
    context.subscriptions.push(cmd);
}
