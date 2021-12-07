const inputEl = document.querySelector('input[type="number"]');
const renderBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
let elements = [];

renderBtn.addEventListener('click', () => {
    const amount = parseInt(inputEl.value);
    createBoxes(amount);
});
 
destroyBtn.addEventListener('click', () => { boxesEl.innerHTML=""});

function createBoxes(amount) {
    let width = 30;
    let height = 30;
    
    for (let i = 0; i < amount; i += 1){
      const item = document.createElement("div");
      item.style.width = `${width}px`;
      item.style.height = `${height}px`;
      item.style.backgroundColor = getRandomHexColor();
      width += 10;
      height += 10;
      elements.push(item);
    }
    
    boxesEl.append(...elements);
    
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
