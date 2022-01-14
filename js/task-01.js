const unorderedListEl = document.querySelectorAll("ul#categories li.item");
const unorderedListElLeng = unorderedListEl.length;
console.log(`Number of categories : ${unorderedListElLeng} `);

for (let i = 0; i < unorderedListElLeng; i++) {
  const headerTextEl = unorderedListElLeng[i].firstElementChild.textContent;
  console.log(`Category: ${headerTextEl}`);
}
const elementsEl = unorderedListElLeng[i].lastElementChild;
const numberOfElementsEl = elementsEl.querySelectorAll("li");
console.log(`Elements: ${numberOfElementsEl.length}`);
