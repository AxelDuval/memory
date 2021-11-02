const cards = document.querySelectorAll('.card');
let cardActive = false;
let firstCard;
let secondCard;
let lockCards = false;
let array = [];



for (let card of cards){
    card.addEventListener('click', revealCard);   
}


function revealCard(){
    this.childNodes[1].classList.add('active');
      let attribute = this.getAttribute('data-attribute');
      array.push(attribute);
      firstCard = array[0];
      secondCard = array[1];
      checkCards(firstCard, secondCard);
}      

function checkCards(firstCard, secondCard){
    console.log(firstCard);
    console.log(secondCard);
}; 

