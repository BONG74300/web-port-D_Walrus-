"use strict";
const play=document.getElementById("play"),library=document.getElementById("library"),game=document.getElementById("game"),canvas=document.getElementById("canvas"),loading=document.getElementById("loading");
let started=false;
function start(){
 library.style.display="none"; game.classList.add("active"); canvas.focus();
 if(started)return; started=true;
 window.Module={
  canvas,
  locateFile:file=>"./"+file,
  print:t=>console.log("[DOOM]",t),
  printErr:t=>console.error("[DOOM]",t),
  setStatus:t=>{if(t)loading.textContent=t},
  onRuntimeInitialized(){loading.classList.add("hidden");canvas.focus();}
 };
 const s=document.createElement("script");s.src="./doom.js";s.async=true;
 s.onerror=()=>loading.textContent="Engine build missing. Run ./build-doom2.sh first.";
 document.body.appendChild(s);
}
play.addEventListener("click",start);
play.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" ")start()});