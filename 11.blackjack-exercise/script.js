let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let player = {
    name : "Sara",
    chips: 300
}
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

let startBtn = document.querySelector("#start-btn").addEventListener("click",startGame);
let newCardBtn = document.querySelector("#newCard-btn").addEventListener("click",newCard);

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20) {
        message = "Do you want to draw a new card ?";   
    }else if (sum === 21) {
        message = "You've got Blackjack !";
        hasBlackJack = true;
    }else {
        message = "You're out of the game !";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1;
    if(randomNumber > 10){
        return 10;
    }else if(randomNumber === 1){
        return 11;
    }else{
        return randomNumber;
    }
}