# Doom II Web Port

This folder contains a reproducible build workflow for compiling the open-source WebDOOM/PrBoom engine to WebAssembly.

## Upstream engine

WebDOOM is based on PrBoom and provides a WebAssembly build path using Emscripten.

Upstream source:
https://github.com/UstymUkhman/WebDOOM

## Files in this folder

- `get-webdoom.sh` — clones or updates the upstream WebDOOM source.
- `install.sh` — installs Linux build dependencies and Emscripten.
- `build-doom2.sh` — activates Emscripten and builds the Doom II web target.
- `serve.sh` — serves the generated web build on port 8080.
- `.gitignore` — excludes generated output and proprietary WAD files.

## Build in GitHub Codespaces

```bash
cd "Doom II"
chmod +x get-webdoom.sh install.sh build-doom2.sh serve.sh
./get-webdoom.sh
./install.sh
source "$HOME/emsdk/emsdk_env.sh"
./build-doom2.sh
./serve.sh
```

Open the forwarded port 8080 in Codespaces.

## Source tree fetched by get-webdoom.sh

The upstream project contains the main source and build areas:

- `src/` — PrBoom engine source
- `data/` — engine data/configuration
- `public/` — web-facing files
- `build/` — build support/output
- `Makefile`, `Makefile.am`, `Makefile.in`
- `configure`, `configure.ac`
- `build.sh`, `build.bat`
- `COPYING`, `LICENSE`, `AUTHORS`
- `README.md`, `INSTALL`

The generated browser build is expected to contain WebAssembly/JavaScript/HTML output.

## Game data

DOOM2.WAD is commercial game data and is intentionally not included in this repository. Use a legally obtained copy locally, or use freely licensed compatible game data for development.

## Licenses

Keep the upstream project's GPL/license notices when distributing modified engine code. This wrapper folder does not replace the upstream licensing requirements.
