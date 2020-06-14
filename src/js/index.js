import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const textArea = document.querySelector(".editor__textarea--js");
const buttonLoad = document.querySelector(".editor__button-load--js");
const buttonSave = document.querySelector(".editor__button-save--js");

const entry = localStorage.getItem("entry", textArea.value);

if (textArea.value) {
  textArea.value = entry;
}

buttonSave.addEventListener("click", () => {
  localStorage.setItem("entry", textArea.value);
});

buttonLoad.addEventListener("click", () => {
  textArea.value = localStorage.getItem("entry", textArea.value);
});
