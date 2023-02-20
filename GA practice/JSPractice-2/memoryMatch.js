const cards = document.querySelectorAll('.memory-card');
//cards is == to the memory card divs!
//below we are making a function to make the cards FLIP when clicked

let hasFlipped = false;
let firstCard, secondCard;

function flipCard() {
    // this.classList.toggle('flip');

    //this takes place of toggle flip
    this.classList.add('flip');

    if (!hasFlippedCard){
       
        hasFlippedCard = true;
        firstCard = this;
    }

}

cards.forEach(card => card.addEventListener('click', flipCard));
