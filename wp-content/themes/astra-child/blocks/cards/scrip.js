let cards = document.querySelectorAll(".card");

function click_card(card) {
  return (e) => {
    if (card.classList.contains("hide")) {
      card.classList.add("show");
      card.classList.remove("hide");
    } else {
      card.classList.remove("show");
      card.classList.add("hide");
    }
  };
}
cards.forEach((card) => {
  card.addEventListener("click", click_card(card));
});
