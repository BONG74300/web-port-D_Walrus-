#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
SRC="$ROOT/wasm-revc"

if [ ! -d "$HOME/emsdk" ]; then
  git clone https://github.com/emscripten-core/emsdk.git "$HOME/emsdk"
fi
cd "$HOME/emsdk"
./emsdk install latest
./emsdk activate latest
source "$HOME/emsdk/emsdk_env.sh"

if [ ! -d "$SRC/.git" ]; then
  git clone --recurse-submodules https://github.com/origami-ltd/wasm-revc.git "$SRC"
fi

cd "$SRC"
if [ -x ./scripts/build-web.sh ]; then
  REVC_AUDIO=OAL ./scripts/build-web.sh
else
  echo "Upstream build script was not found. Check the upstream repository README."
  exit 1
fi

JS="$(find "$SRC" -type f -name 'reVC.js' -o -name 'revc.js' | head -n1 || true)"
WASM="$(find "$SRC" -type f -name 'reVC.wasm' -o -name 'revc.wasm' | head -n1 || true)"
[ -n "$JS" ] && cp "$JS" "$ROOT/revc.js"
[ -n "$WASM" ] && cp "$WASM" "$ROOT/revc.wasm"
[ -f "$ROOT/revc.js" ] && [ -f "$ROOT/revc.wasm" ] || { echo "Build output was not found automatically."; exit 1; }
echo "Built: $ROOT/revc.js and $ROOT/revc.wasm"