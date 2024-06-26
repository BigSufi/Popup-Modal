const openModal = document.querySelector(".btn");
const closeModal = document.querySelector(".closemodal");
const overLay = document.querySelector(".overlay");
const realModal = document.querySelector(".modal");

openModal.addEventListener("click", () => {
  realModal.classList.add("visible");
  overLay.classList.add("visible");
});

closeModal.addEventListener("click", () => handleRemoval());

overLay.addEventListener("click", () => {
  handleRemoval();
});

const handleRemoval = () => {
  realModal.classList.remove("visible");
  overLay.classList.remove("visible");
};
