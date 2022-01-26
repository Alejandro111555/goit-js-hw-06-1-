// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
// то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const inputRef = document.querySelector("#validation-input");

inputRef.addEventListener("blur", unFocusHandler);

function unFocusHandler(event) {
  function removeClasses() {
    event.currentTarget.classList.remove("invalid");
    event.currentTarget.classList.remove("valid");
  }

  if (event.currentTarget.value.length.toString() === inputRef.dataset.length) {
    removeClasses();
    event.currentTarget.classList.add("valid");
  } else if (event.currentTarget.value.length === 0) {
    removeClasses();
  } else {
    removeClasses();
    event.currentTarget.classList.add("invalid");
  }
}
