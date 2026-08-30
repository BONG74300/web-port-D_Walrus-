#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
ENGINE="$ROOT/WebDOOM"

if [ ! -d "$ENGINE" ]; then
  echo "Missing WebDOOM source. Run ./get-webdoom.sh first."
  exit 1
fi

source "$HOME/emsdk/emsdk_env.sh"

cd "$ENGINE"

if [ ! -x "./configure" ]; then
  echo "configure script is missing"
  exit 1
fi

./build.sh doom2

echo
echo "Build complete."
echo "Check $ENGINE/web for the generated browser files."
echo "DOOM2.WAD is not included by this project."
