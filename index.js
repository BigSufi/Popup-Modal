const grandParent = document.querySelector(".grand_parent");

const parentOne = grandParent.children[0];

parentOne.style.color = "red";

const parentTwo = parentOne.nextElementSibling;

parentTwo.style.color = "green";

const mostgrandParent = parentOne.parentElement;

mostgrandParent.style.color = "blue";

parentOne.children[0].style.color = "pink";
parentOne.children[1].style.color = "purple";

parentTwo.previousElementSibling.style.color = "grey";

// const element = document.querySelector(".div_class");

// const handleClick = () => {
//   element.style.color = "red";
//   console.log("ran");
// };

// // Adding event listener for "mouseenter"
// element.addEventListener("click", handleClick);

// // Removing event listener for "mouseleave"
// element.removeEventListener("click", handleClick);

// const element = document.addEventListener("input", (e) => {
//   console.log(e.target.value === "");
// });

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     let counter = parseInt(button.dataset.clicks);
//     button.dataset.clicks = counter + 1;
//   });
// });

// const element = document.querySelectorAll("[data-clicks]");

// element.forEach((button) => {
//   button.dataset.clicks = 200;
// });

// const array = [2, 2];
// const output = array.every((item) => {
//   return item === 2;
// });

// console.log(output);
