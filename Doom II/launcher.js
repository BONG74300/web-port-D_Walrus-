"use strict";

const play = document.getElementById("play");
const library = document.getElementById("library");
const game = document.getElementById("game");
const canvas = document.getElementById("canvas");
const loading = document.getElementById("loading");

let engineStarted = false;

function startGame() {
  library.style.display = "none";
  game.classList.add("active");
  loading.classList.remove("hidden");
  loading.textContent = "Loading Doom II…";
  canvas.focus();

  if (engineStarted) return;
  engineStarted = true;

  // WebDOOM's Doom II build is a matching trio:
  // doom2.js + doom2.wasm + doom2.data
  window.Module = {
    canvas: canvas,

    locateFile(file) {
      // Keep generated companion filenames unchanged.
      return "./" + file;
    },

    print(text) {
      console.log("[DOOM II]", text);
    },

    printErr(text) {
      console.error("[DOOM II ERROR]", text);
    },

    setStatus(text) {
      if (text) loading.textContent = text;
    },

    onRuntimeInitialized() {
      console.log("Doom II runtime initialized");
      loading.classList.add("hidden");
      canvas.focus();
    },

    onAbort(reason) {
      console.error("Doom II aborted:", reason);
      loading.textContent = "Game engine error: " + reason;
      engineStarted = false;
    }
  };

  const engine = document.createElement("script");
  engine.src = "./doom2.js";
  engine.async = true;

  engine.onload = () => console.log("doom2.js loaded");

  engine.onerror = () => {
    loading.textContent =
      "ERROR: Could not load doom2.js. Make sure doom2.js, doom2.wasm, and doom2.data are in this folder.";
    engineStarted = false;
  };

  document.body.appendChild(engine);
}

play.addEventListener("click", startGame);
