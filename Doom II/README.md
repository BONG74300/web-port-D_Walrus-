# DOOM II Web Port

<p align="center">
<a href="https://github.com/features/codespaces"><img src="https://img.shields.io/badge/GitHub%20Codespaces-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Codespaces"></a>
<a href="https://replit.com/"><img src="https://img.shields.io/badge/Replit-F26207?style=for-the-badge&logo=replit&logoColor=white" alt="Replit"></a>
<a href="https://www.heroku.com/"><img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku"></a>
<a href="https://www.koyeb.com/"><img src="https://img.shields.io/badge/Koyeb-121212?style=for-the-badge&logo=koyeb&logoColor=white" alt="Koyeb"></a>
</p>

HTML5 launcher and GitHub Codespaces scaffold for a Doom-engine WebAssembly port.

> This project does not include DOOM2.WAD or other commercial game data. Supply only legally obtained game data.

## Run in GitHub Codespaces

1. Open this repository on GitHub.
2. Click **Code → Codespaces → Create codespace on main**.
3. Wait for setup to finish.
4. Open a terminal and run:

```bash
cd "Doom II"
source ~/emsdk/emsdk_env.sh
chmod +x scripts/*.sh
./scripts/serve.sh
```

5. Open the **Ports** tab.
6. Open the forwarded URL for port **8080**.

## Run locally

```bash
cd "Doom II"
chmod +x scripts/*.sh
./scripts/serve.sh
```

Then visit `http://localhost:8080`.

## Re-publish / deploy

### GitHub Pages

This launcher is static HTML/CSS/JS. Enable **Settings → Pages**, select the branch containing the `Doom II/public` site, or deploy that folder with a GitHub Pages workflow.

### Replit

1. Create a new Replit project.
2. Import this GitHub repository.
3. Set the run command:

```bash
cd "Doom II/public" && python3 -m http.server 8080
```

4. Publish the web app from Replit.

### Heroku

For static deployment, use a small web server or container. Ensure the process binds to Heroku's `$PORT`.

Example:

```bash
cd "Doom II/public"
python3 -m http.server $PORT
```

### Koyeb

1. Import the GitHub repository.
2. Create a Web Service.
3. Use a build/runtime that serves the `Doom II/public` directory.
4. Configure port `8080` or the platform-provided port.
5. Deploy and use the generated public URL.

## Project structure

```text
Doom II/
├── .devcontainer/
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── scripts/
│   ├── setup.sh
│   └── serve.sh
├── .gitignore
├── LICENSE
└── README.md
```

## License

The original launcher code in this folder is MIT licensed. Any Doom engine added later remains under its upstream license.

