const dialogElement = document.getElementById("modal");
const dialogImage = document.querySelector("#modal img");
const images = document.querySelectorAll("figure img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    dialogImage.src = image.src;
    dialogElement.showModal();
    document.body.classList.add("modal-open");
  });
});
dialogElement.addEventListener("close", () => {
  document.body.classList.remove("modal-open");
});