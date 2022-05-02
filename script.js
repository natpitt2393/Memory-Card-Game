console.log('I am working!')

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    console.log('I was clicked!');
    console.log(this);
    this.classList.toggle('flip')
}

cards.forEach(card => card.addEventListener('click', flipCard));