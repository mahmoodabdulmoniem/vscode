# Building the Valinor Studio Standalone IDE

This repository is a fork of the `microsoft/vscode` source. It includes a custom extension located under `extensions/valinor-studio` which exposes placeholder commands for all planned features. To package a self‑contained "Valinor Studio" build, follow these steps.

## 1. Install Dependencies

Use `npm` to install workspace packages. The project relies on the versions defined in `package-lock.json`.

```bash
npm install --legacy-peer-deps
```

If the registry is unreachable (for example when the environment lacks internet access) set up a local npm mirror or ensure connectivity first.

## 2. Compile the Extension

The Valinor Studio features are written in TypeScript. Compile them before creating the final product.

```bash
npx tsc -b extensions/valinor-studio
```

This produces JavaScript under `extensions/valinor-studio/out`.

## 3. Build VS Code

VS Code is built through Gulp tasks. To create a distributable for your platform run the task matching your OS and architecture. Examples:

```bash
# Linux x64
npx gulp vscode-linux-x64

# macOS (Apple Silicon)
npx gulp vscode-darwin-arm64

# Windows x64
npx gulp vscode-win32-x64
```

The resulting archives appear in `.build/`.

## 4. Custom Branding

Edit `product.json` if you need the application name or data folders to read "Valinor Studio" instead of the default "Code - OSS". Changing these fields affects the generated packages:

- `nameShort`
- `nameLong`
- `applicationName`
- `dataFolderName`

After adjusting `product.json`, re-run the Gulp build to produce a fully branded standalone IDE.

