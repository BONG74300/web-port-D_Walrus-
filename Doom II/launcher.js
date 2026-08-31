(function () {
  const play = document.getElementById("play");
  const library = document.getElementById("library");
  const game = document.getElementById("game");
  const canvas = document.getElementById("canvas");
  const loading = document.getElementById("loading");

  if (!play) {
    console.error("Doom launcher: #play button not found");
    return;
  }

  let started = false;

  function startDoom() {
    // This happens immediately, proving the button click works.
    library.style.display = "none";
    game.classList.add("active");
    canvas.focus();

    if (started) return;
    started = true;

    window.Module = {
      canvas: canvas,
      locateFile: function (file) {
        return file;
      },
      print: function (text) { console.log("[DOOM]", text); },
      printErr: function (text) { console.error("[DOOM]", text); },
      setStatus: function (text) {
        if (text) loading.textContent = text;
      },
      onRuntimeInitialized: function () {
        loading.style.display = "none";
        canvas.focus();
      },
      onAbort: function (reason) {
        loading.textContent = "Engine error: " + reason;
        started = false;
      }
    };

    const script = document.createElement("script");
    script.src = "doom2.js";
    script.onerror = function () {
      loading.textContent = "ERROR: doom2.js failed to load.";
      started = false;
    };
    document.body.appendChild(script);
  }

  // Exactly one click handler.
  play.onclick = startDoom;
})();