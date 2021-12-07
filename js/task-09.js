const bodyEl = document.querySelector("body");
const btnChangeColorEl = document.querySelector(".change-color");
const spanNameColorEl = document.querySelector(".color");

btnChangeColorEl.addEventListener('click', onBtnChangeColorClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnChangeColorClick(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanNameColorEl.textContent = bodyEl.style.backgroundColor;
}