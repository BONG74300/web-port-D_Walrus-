"use strict";

const play = document.getElementById("play");
const library = document.getElementById("library");
const game = document.getElementById("game");
const canvas = document.getElementById("canvas");
const loading = document.getElementById("loading");

let engineStarted = false;

window.startDoom = function () {
  if (!play || !library || !game || !canvas || !loading) {
    alert("Launcher error: required page elements are missing.");
    return;
  }

  library.style.display = "none";
  game.classList.add("active");
  loading.classList.remove("hidden");
  loading.textContent = "Loading Doom II…";
  canvas.focus();

  if (engineStarted) return;
  engineStarted = true;

  window.Module = {
    canvas: canvas,
    locateFile: function(file) {
      return "./" + file;
    },
    print: function(text) { console.log("[DOOM II]", text); },
    printErr: function(text) { console.error("[DOOM II ERROR]", text); },
    setStatus: function(text) {
      if (text) loading.textContent = text;
    },
    onRuntimeInitialized: function() {
      loading.classList.add("hidden");
      canvas.focus();
    },
    onAbort: function(reason) {
      console.error(reason);
      loading.textContent = "Game engine error: " + reason;
    }
  };

  const script = document.createElement("script");
  script.src = "./doom2.js";
  script.async = false;
  script.onload = function() {
    console.log("doom2.js loaded");
  };
  script.onerror = function() {
    loading.textContent = "ERROR: doom2.js could not be loaded.";
    engineStarted = false;
  };
  document.body.appendChild(script);
};

if (play) {
  play.addEventListener("click", window.startDoom);
}