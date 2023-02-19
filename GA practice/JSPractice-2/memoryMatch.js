const cards = document.querySelectorAll('.memory-card');
//cards is == to the memory card divs!
//below we are making a function to make the cards FLIP when clicked

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));
