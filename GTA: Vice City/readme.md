# GTA: Vice City — WebAssembly Port

A browser launcher for a WebAssembly build of a Vice City-compatible reimplementation.

## Legal requirement

This repository does **not** include GTA: Vice City game assets. Use files from your own legitimate installation. The upstream reVC project also states that game assets are required and should not be redistributed.

## Architecture

```text
Game card → launcher.js → revc.js → revc.wasm → canvas
```

## GitHub Codespaces

```bash
cd /workspaces/web-port
git pull origin main
cd "GTA: Vice City"
chmod +x build-web.sh serve.sh
./build-web.sh
./serve.sh
```

Open the Codespaces **Ports** tab and open port **8082**.

## Files

- `index.html` — game card and fullscreen canvas
- `launcher.js` — starts the Emscripten JavaScript runtime after clicking the card
- `build-web.sh` — installs/activates Emscripten, obtains the upstream WASM port source, and builds it
- `serve.sh` — local development server
- `revc.js` + `revc.wasm` — generated build output (not committed)

## Upstream basis

This setup targets the browser-port architecture documented by the wasm-revc project, which uses Emscripten and requires users to provide their own game files. See the upstream project for current build details.

## Notes

A successful WebAssembly engine build alone does not grant rights to redistribute Rockstar game data. Keep commercial assets out of GitHub.
