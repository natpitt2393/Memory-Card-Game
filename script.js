console.log('I am working!')

const cards = document.querySelectorAll('.memory-card');
const timerEl = document.getElementById('time');
let timeCount = cards.length * 5;
let timerId;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function startGame() {
    timerId = setInterval(runClock, 1000);
}

startGame();


function runClock() {
    timeCount--;
    timerEl.textContent = timeCount;
    if(timeCount <= 0) {
        clearInterval(timerId);
    }
}



function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('flip');

if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;

    return;
} 
    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
 }


function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        
        isMatch ? disableCards() : flipBackCards();
    } 


function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function flipBackCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard(); 
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12)
        card.style.order = randomPosition;
    })
})();
 
cards.forEach(card => card.addEventListener('click', flipCard));