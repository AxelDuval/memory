
function looseLayer(){
    let container = document.getElementById('container');
    container.classList.add('displayNone');
    let rulesBtn = document.createElement('button');
    rulesBtn.setAttribute("id", "accept");
    rulesBtn.classList.add("btn", "btn-warning");
    let rulesImg = document.createElement('div');
    rulesBtn.setAttribute("id", "image");

    let divAccept = document.createElement('div');
    divAccept.setAttribute("id", "divAccept");

    let rulesTitle = document.createElement('h3');
    rulesTitle.setAttribute("id", "rulesTitle");

    let toRead = document.createElement('div');
    toRead.setAttribute("id", "toRead");

    let rules = document.createElement('div');
    rules.setAttribute("id", "rules");

    divAccept.appendChild(rulesBtn);
    toRead.appendChild(rulesTitle);
    toRead.appendChild(rulesImg);
    toRead.appendChild(divAccept);

    rules.appendChild(toRead);

    document.body.appendChild(rules);

    rulesTitle.innerText = "PerdU";
    rulesImg.innerHTML = `<img src="/img/loose.gif"/>`;     
    rulesBtn.innerText = "Rejouer";     

    rulesBtn.addEventListener('click', function() {
    rules.classList.add('displayNone');
    container.classList.remove('displayNone');
    play();
    });

   
}