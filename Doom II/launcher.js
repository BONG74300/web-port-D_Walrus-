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
  canvas.focus();

  if (engineStarted) return;
  engineStarted = true;

  window.Module = {
    canvas,
    locateFile(file) {
      return new URL(file, window.location.href).href;
    },
    print(text) { console.log("[DOOM II]", text); },
    printErr(text) { console.error("[DOOM II]", text); },
    setStatus(text) {
      if (text) loading.textContent = text;
    },
    onRuntimeInitialized() {
      loading.classList.add("hidden");
      canvas.focus();
    },
    onAbort(reason) {
      loading.textContent = "Game engine stopped: " + reason;
    }
  };

  const engine = document.createElement("script");
  engine.src = "./doom.js";
  engine.async = true;
  engine.onerror = () => {
    loading.textContent = "Could not load doom.js. Build the WebAssembly engine first.";
    engineStarted = false;
  };
  document.body.appendChild(engine);
}

play.addEventListener("click", startGame);
