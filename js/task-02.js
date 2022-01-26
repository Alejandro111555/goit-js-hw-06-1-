const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngredients = ingredients.map((element) => {
  const listItemEl = document.createElement("li");
  listItemEl.textContent = element;
  listItemEl.classList.add("item");
  return listItemEl;
});
const unorderedList = document.querySelector("#ingredients");
unorderedList.append(...listOfIngredients);
