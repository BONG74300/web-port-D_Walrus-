#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
ENGINE="$ROOT/WebDOOM"

if [ ! -d "$ENGINE/.git" ]; then
  git clone https://github.com/UstymUkhman/WebDOOM.git "$ENGINE"
else
  git -C "$ENGINE" pull --ff-only
fi

echo "WebDOOM source is ready in: $ENGINE"
echo "Next: ./install.sh && ./build-doom2.sh"
