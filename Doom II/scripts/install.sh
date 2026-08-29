#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
sudo apt-get update
sudo apt-get install -y git build-essential python3 python3-venv pkg-config autoconf automake libtool cmake ninja-build
if [ ! -d "$HOME/emsdk" ]; then
  git clone https://github.com/emscripten-core/emsdk.git "$HOME/emsdk"
fi
cd "$HOME/emsdk"
./emsdk install latest
./emsdk activate latest
source "$HOME/emsdk/emsdk_env.sh"
mkdir -p "$ROOT/engine"
if [ ! -d "$ROOT/engine/doomgeneric/.git" ]; then
  git clone --depth 1 https://github.com/ozkl/doomgeneric.git "$ROOT/engine/doomgeneric"
fi
echo "Installed. Run: source ~/emsdk/emsdk_env.sh && ./scripts/build-engine.sh"
