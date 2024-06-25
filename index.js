const formInputElement = document.querySelector(".form");
const inputField = document.querySelector(".item-input");
const list = document.querySelector(".list");

formInputElement.addEventListener("submit", (e) => {
  e.preventDefault();

  const item = document.createElement("div");
  item.innerText = inputField.value;
  item.classList.add("list-item");

  list.appendChild(item);

  item.addEventListener("click", () => {
    list.removeChild(item);
  });

  inputField.value = "";
});
