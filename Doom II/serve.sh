#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
WEB="$ROOT/WebDOOM/web"

if [ ! -d "$WEB" ]; then
  echo "No web build found. Run ./build-doom2.sh first."
  exit 1
fi

cd "$WEB"
python3 -m http.server 8080
