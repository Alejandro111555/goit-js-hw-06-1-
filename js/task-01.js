// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

const allCategoriesRef = document.querySelectorAll(`ul#categories li.item`);
const numberOfCategories = allCategoriesRef.length;
console.log(`Number of categories: ${numberOfCategories}`);

allCategoriesRef.forEach((element) => {
  const titleText = element.querySelector(`h2`).textContent;
  console.log(`Category: ${titleText}`);
  const elementsRef = element.querySelectorAll(`li`);
  console.log(`Elements: ${elementsRef.length}`);
});
