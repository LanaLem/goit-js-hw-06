const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', onBtnDecrementClick);
incrementBtn.addEventListener('click', onBtnIncrementClick);

function onBtnDecrementClick(event) {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};
 
function onBtnIncrementClick(event) {
    counterValue += 1;
    valueEl.textContent = counterValue;
};