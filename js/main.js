const cards = document.querySelectorAll('.card');
const logNumberOfTry = document.getElementById('try');
const container = document.getElementById('container');
let cardActive = false;
var numberOfTry = 12;
var winNumber = 0;
let firstCard;
let secondCard;


function play(){
    numberOfTry = 12;
    winNumber = 0;
    randomizeCards();

    // Add listener on the user click on cards
    for (let card of cards){
        card.addEventListener('click', revealCard);   
    }

    // Function to reveal clicked cards and store the cards values
    function revealCard(){
        // Reveal the card face
        this.childNodes[1].classList.add('active');
        // If it's the first card selected by user, store the card value
        if (cardActive === false){
            cardActive = true;
            firstCard = this;
            this.removeEventListener('click', revealCard);
            return;
        }  
        // If the first card albready exist, store the card value in another variable
        else {
            cardActive = false;
            secondCard = this;
        }
        checkCards(firstCard, secondCard);  
        }     

    // Function to compare the two selected cards
    function checkCards(firstCard, secondCard){
        if(firstCard.getAttribute('data-attribute') === secondCard.getAttribute('data-attribute')){
            firstCard.removeEventListener('click', revealCard);
            secondCard.removeEventListener('click', revealCard);
            winNumber++;
            // If the player have found all the cards, show the win layer
            if (winNumber === (cards.length /2)){
                winLayer();
            }
        }

        else {
            // Prevent the click on other cards before the end of the animation and decrease try
            container.classList.add('disableClick');
            numberOfTry--;
            logNumberOfTry.innerText = `Nombre d'essais restants : ${numberOfTry}`;
            
            
            // set a delay before hidding cards
            setTimeout(() => { 
                firstCard.childNodes[1].classList.remove('active');
                secondCard.childNodes[1].classList.remove('active');
                firstCard.addEventListener('click', revealCard);
                container.classList.remove('disableClick');
                // If the number of tries equal 0, the player loose the game
                if (numberOfTry === 0) {
                    looseLayer();
                    numberOfTry = 12;
                }

            }, 1500);    
        }
    }; 

    // Display cards in a random order
    function randomizeCards(){
        cards.forEach(card => {
            let randomNumber = Math.floor(Math.random() * (cards.length));
            card.style.order = randomNumber;
        }) 
    }


}

play();