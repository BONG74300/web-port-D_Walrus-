#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
ENGINE="$ROOT/WebDOOM"

if [ ! -d "$ENGINE/.git" ]; then
  git clone --depth=1 https://github.com/UstymUkhman/WebDOOM.git "$ENGINE"
fi

if [ ! -f "$HOME/emsdk/emsdk_env.sh" ]; then
  echo "Emscripten is missing. Run ./install.sh first."
  exit 1
fi

source "$HOME/emsdk/emsdk_env.sh"
cd "$ENGINE"
chmod +x build.sh
./build.sh doom2

mkdir -p "$ROOT"
FOUND=0
while IFS= read -r -d '' f; do
  case "$f" in
    *.js|*.wasm|*.data)
      cp "$f" "$ROOT/"
      FOUND=1
      ;;
  esac
done < <(find "$ENGINE" -type f \( -name '*.js' -o -name '*.wasm' -o -name '*.data' \) -print0)

if [ "$FOUND" -eq 0 ]; then
  echo "Build finished but no .js/.wasm output was found."
  exit 1
fi

JSFILE="$(find "$ROOT" -maxdepth 1 -type f -name '*.js' ! -name 'launcher.js' -print -quit)"
WASMFILE="$(find "$ROOT" -maxdepth 1 -type f -name '*.wasm' -print -quit)"
if [ -n "$JSFILE" ] && [ "$JSFILE" != "$ROOT/doom.js" ]; then cp "$JSFILE" "$ROOT/doom.js"; fi
if [ -n "$WASMFILE" ] && [ "$WASMFILE" != "$ROOT/doom.wasm" ]; then cp "$WASMFILE" "$ROOT/doom.wasm"; fi
echo "WebAssembly build staged in $ROOT"