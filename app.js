const favButton = document.querySelector(".fav-button");

favButton.addEventListener("click", function () {
  if (favButton.classList.contains("deactivate")) {
    favButton.classList.remove("deactivate");
  }
  if (favButton.classList.contains("active")) {
    favButton.classList.add("deactivate");
  }
  favButton.classList.toggle("animate");
  favButton.classList.toggle("active");
  favButton.classList.toggle("inactive");
});
