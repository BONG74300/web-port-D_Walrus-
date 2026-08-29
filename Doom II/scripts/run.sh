#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/../public"
echo "Open the forwarded port 8080 URL."
python3 -m http.server 8080
