"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const play = document.getElementById("play");
  const library = document.getElementById("library");
  const game = document.getElementById("game");
  const canvas = document.getElementById("canvas");
  const loading = document.getElementById("loading");

  if (!play || !library || !game || !canvas || !loading) {
    console.error("Doom II launcher: required HTML elements are missing.");
    return;
  }

  let engineStarted = false;

  function startGame(event) {
    event?.preventDefault();

    library.style.display = "none";
    game.classList.add("active");
    loading.classList.remove("hidden");
    loading.textContent = "Loading Doom II…";
    canvas.focus();

    if (engineStarted) return;
    engineStarted = true;

    window.Module = {
      canvas,

      locateFile(file) {
        return new URL(file, window.location.href).href;
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
        loading.classList.add("hidden");
        canvas.focus();
      },

      onAbort(reason) {
        console.error("Doom II aborted:", reason);
        loading.textContent = "Game engine error: " + reason;
        engineStarted = false;
      }
    };

    const existing = document.querySelector('script[data-doom-engine="true"]');
    if (existing) return;

    const engine = document.createElement("script");
    engine.src = "./doom2.js";
    engine.async = true;
    engine.dataset.doomEngine = "true";

    engine.onload = () => console.log("Doom II engine script loaded");

    engine.onerror = () => {
      loading.textContent = "ERROR: Could not load doom2.js.";
      engineStarted = false;
      engine.remove();
    };

    document.body.appendChild(engine);
  }

  play.addEventListener("click", startGame);
  play.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") startGame(event);
  });
});