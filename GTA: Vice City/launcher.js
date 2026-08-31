"use strict";
const play=document.getElementById("play"),library=document.getElementById("library"),game=document.getElementById("game"),canvas=document.getElementById("canvas"),loading=document.getElementById("loading");
let started=false;
function startGame(){
 library.style.display="none";game.classList.add("active");canvas.focus();
 if(started)return;started=true;
 window.Module={
  canvas,
  locateFile:file=>new URL(file,window.location.href).href,
  print:t=>console.log("[VICE CITY]",t),
  printErr:t=>console.error("[VICE CITY]",t),
  setStatus:t=>{if(t)loading.textContent=t},
  onRuntimeInitialized(){loading.classList.add("hidden");canvas.focus()},
  onAbort:r=>loading.textContent="Engine stopped: "+r
 };
 const s=document.createElement("script");s.src="./revc.js";s.async=true;
 s.onerror=()=>{loading.textContent="revc.js is missing. Run ./build-web.sh first.";started=false};
 document.body.appendChild(s);
}
play.addEventListener("click",startGame);