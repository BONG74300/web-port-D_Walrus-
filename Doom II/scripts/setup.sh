#!/usr/bin/env bash
set -e
sudo apt-get update
sudo apt-get install -y git build-essential cmake ninja-build python3 pkg-config
if [ ! -d "$HOME/emsdk" ]; then
  git clone https://github.com/emscripten-core/emsdk.git "$HOME/emsdk"
  cd "$HOME/emsdk"; ./emsdk install latest; ./emsdk activate latest
fi
echo 'source "$HOME/emsdk/emsdk_env.sh" >/dev/null' >> ~/.bashrc
source "$HOME/emsdk/emsdk_env.sh"
emcc --version
