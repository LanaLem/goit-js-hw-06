const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputKyePress);

function onInputKyePress(event) {
    textEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value.trim().length === 0) {
        textEl.textContent = "Anonymous";
    }
}