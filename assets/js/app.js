// --------------------------------------- navbar -------------------------------------//

const item = document.querySelector(".navbar-items");
const menu = document.querySelector(".toggle");

menu.addEventListener("click", () => {
  item.classList.toggle("show");
  let contain = document.querySelector("body");
  let container = document.querySelector(".my-container");

  if (item.classList.contains("show")) {
    contain.style.position = "fixed";
    contain.style.top = "0";
    contain.style.left = "0";
    contain.style.width = "100%";
    index.classList.add("z-3");
    container.classList.add("position-u");
  } else {
    contain.style.position = "unset";
  }
});