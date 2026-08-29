#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
source "$HOME/emsdk/emsdk_env.sh"
ENGINE="$ROOT/engine/doomgeneric"
if [ ! -d "$ENGINE" ]; then echo "Run ./scripts/install.sh first"; exit 1; fi
mkdir -p "$ROOT/public/engine"
echo "Searching upstream DoomGeneric for its Emscripten build target..."
find "$ENGINE" -maxdepth 3 -type f \( -iname '*emscripten*' -o -iname 'Makefile*' \) -print
echo ""
echo "DoomGeneric includes an Emscripten platform port. Build commands can change upstream;"
echo "inspect the files above and use the upstream target rather than compiling src/*.c blindly."
echo "After a successful build, copy generated .js/.wasm artifacts into public/engine/."
