const allcards = document.querySelectorAll(".card");

const deleteCards = function () {
  for (let i = 0; i < allcards.length; i++) {
    allcards[i].remove();
  }
};

// deleteCards();
