let counterValue = 0;
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

const buttonIncreaseHandler = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const buttonDecreaseHandler = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

btnIncrement.addEventListener("click", buttonIncreaseHandler);
btnDecrement.addEventListener("click", buttonDecreaseHandler);
