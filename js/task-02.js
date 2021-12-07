const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemIngredients = [];
const ingredientsElement = document.querySelector("#ingredients");

ingredients.map(element => {
  const item = document.createElement("li");
  item.textContent = element;
  itemIngredients.push(item);
})

ingredientsElement.append(...itemIngredients);