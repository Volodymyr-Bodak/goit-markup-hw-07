var openButton = document.getElementById("open-menu");
var closeButton = document.getElementById("close-menu");
var menu = document.getElementById("menu");

openButton.addEventListener("click", function() {
  menu.classList.add("visible");
});

closeButton.addEventListener("click", function() {
  menu.classList.remove("visible");
});