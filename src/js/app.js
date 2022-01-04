import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  const image = document.querySelector(".image");
  image.addEventListener("click", () => {
    image.classList.add("active");
  });

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
