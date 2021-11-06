let $ = document;
let menu = $.querySelector(".menu");

//menu toggle listener
$.querySelector(".burger").addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
  } else {
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  }
});
