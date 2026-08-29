#!/usr/bin/env bash
set -euo pipefail
sudo apt-get update
sudo apt-get install -y git build-essential python3 make pkg-config
if [ ! -d "$HOME/emsdk" ]; then git clone --depth 1 https://github.com/emscripten-core/emsdk.git "$HOME/emsdk"; fi
cd "$HOME/emsdk"; ./emsdk install latest; ./emsdk activate latest
grep -qxF 'source "$HOME/emsdk/emsdk_env.sh" >/dev/null' "$HOME/.bashrc" 2>/dev/null || echo 'source "$HOME/emsdk/emsdk_env.sh" >/dev/null' >> "$HOME/.bashrc"
source "$HOME/emsdk/emsdk_env.sh"; emcc --version
echo "Setup complete. Run ./scripts/install.sh"
