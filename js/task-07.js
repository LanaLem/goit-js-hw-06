const sizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

sizeControlEl.addEventListener('input', onSizeControlChange);

function onSizeControlChange(event) {
    textEl.style.fontSize = event.currentTarget.value+'px';
}