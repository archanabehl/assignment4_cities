// function backgroundImage() {
//   return document.querySelector("main");
// }

var main = document.querySelector("main");

function clearBackgroundImage() {
  main.classList.remove("default-bg");
  main.classList.remove("austin-bg");
  main.classList.remove("la-bg");
  main.classList.remove("nyc-bg");
  main.classList.remove("sf-bg");
  main.classList.remove("sydney-bg");
}

function setDefaultBackgroundImage() {
  clearBackgroundImage();
  main.classList.add("default-bg");
}

function setAustinBackgroundImage() {
  clearBackgroundImage();
  main.classList.add("austin-bg");
}

function setLaBackgroundImage() {
  clearBackgroundImage();
  main.classList.add("la-bg");
}

function setNycBackgroundImage() {
  clearBackgroundImage();
  main.classList.add("nyc-bg");
}

function setSfBackgroundImage() {
  clearBackgroundImage();
  main.classList.add("sf-bg");
}

function setsydneyBackgroundImage() {
  clearBackgroundImage();
  main.classList.add("sydney-bg");
}
