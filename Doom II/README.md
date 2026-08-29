# DOOM II Web Port

<p align="center">
<a href="https://github.com/features/codespaces"><img src="https://img.shields.io/badge/GitHub%20Codespaces-181717?style=for-the-badge&logo=github&logoColor=white" alt="Codespaces"></a>
<a href="https://replit.com/"><img src="https://img.shields.io/badge/Replit-F26207?style=for-the-badge&logo=replit&logoColor=white" alt="Replit"></a>
<a href="https://www.heroku.com/"><img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku"></a>
<a href="https://www.koyeb.com/"><img src="https://img.shields.io/badge/Koyeb-121212?style=for-the-badge" alt="Koyeb"></a>
</p>

Build an open-source Doom engine to WebAssembly and serve it in a browser.

Commercial WAD files are not included and must not be committed.

## GitHub Codespaces

Open the repository in Codespaces, then run:

```bash
cd "Doom II"
chmod +x scripts/*.sh
./scripts/install.sh
source ~/emsdk/emsdk_env.sh
./scripts/build-engine.sh
./scripts/run.sh
```

Open the Ports tab and open port 8080.

## Workflow

install.sh installs build tools, Emscripten, DoomGeneric, and DoomKit.
build-engine.sh runs DoomKit's documented wasm build workflow and copies browser artifacts to public/engine.
run.sh serves public on port 8080.

## Replit

Import the repository and run:

```bash
cd "Doom II" && ./scripts/run.sh
```

## Heroku and Koyeb

Build the engine first, then serve the public directory using a process bound to the platform PORT.

## License

DoomGeneric and DoomKit are GPL-licensed upstream components. Preserve notices and comply with their license terms. This project excludes commercial game data.
