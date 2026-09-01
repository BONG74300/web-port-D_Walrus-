#!/usr/bin/env bash
set -euo pipefail

sudo apt-get update
sudo apt-get install -y git build-essential make autoconf automake libtool pkg-config python3

if [ ! -d "$HOME/emsdk" ]; then
  git clone https://github.com/emscripten-core/emsdk.git "$HOME/emsdk"
fi

cd "$HOME/emsdk"
./emsdk install latest
./emsdk activate latest

echo 'Run this in the current shell before building:'
echo 'source "$HOME/emsdk/emsdk_env.sh"'
