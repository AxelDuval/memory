// window.addEventListener("load", startLayer);


 export function startLayer(){
    let container = document.getElementById('container');
    container.classList.add('displayNone');
    let rulesBtn = document.createElement('button');
    rulesBtn.setAttribute("id", "accept");
    rulesBtn.classList.add("btn", "btn-warning");
    let rulesImg = document.createElement('div');
    rulesBtn.setAttribute("id", "startBtn");

    let divAccept = document.createElement('div');
    divAccept.setAttribute("id", "divAccept");

    let rulesContent = document.createElement('p');
    rulesContent.setAttribute("id", "rulesContent");

    let rulesTitle = document.createElement('h3');
    rulesTitle.setAttribute("id", "rulesTitle");

    let toRead = document.createElement('div');
    toRead.setAttribute("id", "toRead");

    let rules = document.createElement('div');
    rules.setAttribute("id", "rules");

    divAccept.appendChild(rulesBtn);
    toRead.appendChild(rulesTitle);
    toRead.appendChild(rulesContent);
    toRead.appendChild(rulesImg);
    toRead.appendChild(divAccept);

    rules.appendChild(toRead);

    document.body.appendChild(rules);

    rulesTitle.innerText = "Bienvenue Sur le jeu memOry";
    rulesContent.innerText = "Le but du jeu jeu est de trouver les différentes paires en 12 essais !"; 
    rulesImg.innerHTML = `<img src="./img/start_game.gif"/>`;     
    rulesBtn.innerText = "C'est parti !";     

    rulesBtn.addEventListener('click', function() {
    rules.classList.add('displayNone');
    container.classList.remove('displayNone');
    // play();
    });
}