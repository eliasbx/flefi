/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//******************       S          T           A           R             T



var scores, roundScore, activePlayer, gamePlaying;

init();

var scoreInput = document.getElementById('fname');


// BUTTON FOR ROLL DICED    Start -->

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying && scoreInput.value !== '' && scoreInput.value !== '.' && scoreInput.value !== '..' && scoreInput.value !== '...' && scoreInput.value !== '....' && scoreInput.value !== '.....' && scoreInput.value !== '......' && scoreInput.value >= 2) {
        // 1. Random number
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM0 = document.querySelector('.dice-0');
        var diceDOM1 = document.querySelector('.dice-1');
        diceDOM0.style.display = 'block';
        diceDOM0.src = 'dice-' + dice0 + '.png';
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice-' + dice1 + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice0 !== 1 && dice1 !== 1) {
            //Add score
            roundScore += dice0 + dice1;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else {
            //Next player
            nextPlayer();
        }

        //3`. Two six in a row
        if (dice1 + dice0 === 12) {
            alert('Double 6 for Player' + parseInt(activePlayer));
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;


            document.getElementById('current-' + activePlayer).textContent = '0';

            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            // document.querySelector('.player-0-panel').classList.remove('active');
            // document.querySelector('.player-1-panel').classList.add('active');

            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';

            document.querySelector('#score-' + activePlayer).textContent = '0';

        }

    }
});

//BUTTON ROLL DICE Finish <--



//INPUT FINAL SCORE Strat -->


document.querySelector('#box-number').addEventListener('submit', function (e) {
    scoreInput = document.getElementById('fname');

    //prevent the normal submission of the form
    e.preventDefault();
    console.log(scoreInput.value)

});


//INPUT FINAL SCORE Finish <--



// BUTTON HOLD Start -->

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying && scoreInput.value !== '' && scoreInput.value !== '.' && scoreInput.value !== '..' && scoreInput.value !== '...' && scoreInput.value !== '....' && scoreInput.value !== '.....' && scoreInput.value !== '......' && scoreInput.value >= 2) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        scoreInput = document.getElementById('fname');

            if (scores[activePlayer] >= scoreInput.value) {

            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

// BUTTON HOLDER Finish <--



function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;


    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
}


//BUTTON NEW GAME Start -->

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById("box-number").reset();


    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

//BUTTON NEW GAME Finish <--

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>'
//var x = document.querySelector('#score-0').textContent;


// CHANGE COLOR

//COLOR-1 --> Start

document.getElementById('color-1').addEventListener('click', function () {
    document.querySelector('.player-score').style.color = '#2F5373';
    document.querySelector('#player-current-box-1').style.backgroundColor = '#2F5373';
    document.querySelector('#player-current-box-2').style.backgroundColor = '#2F5373';
    document.querySelector('.btn-new i').style.color = '#2F5373';
    document.querySelector('.btn-roll i').style.color = '#2F5373';
    document.querySelector('.btn-hold i').style.color = '#2F5373';


    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".active .player-name::after {color: #2F5373;}";

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#titleGame h1:hover {color: #40709C;}";

    // document.querySelector('.after-element').style.color = 'Blue';
    // document.querySelector('.active .player-name ::after').style.color = 'Blue';

    document.querySelector('.player-name').style.color = '#000';
    document.querySelector('#name-1').style.color = '#2F5373';
    document.querySelector('#score-1').style.color = '#2F5373';
    document.querySelector('.player-0-panel').style.backgroundColor = '#b3cef6';
    document.querySelector('.player-1-panel').style.backgroundColor = '#fff';
    document.body.style.backgroundColor = "#010D26";

    document.querySelector('#fname').style.borderColor = '#2F5373';

});

//COLOR-1 Finish <--



//COLOR-2 --> Start

document.getElementById('color-2').addEventListener('click', function () {
    document.querySelector('.player-score').style.color = '#BF3111';
    document.querySelector('#player-current-box-1').style.backgroundColor = '#BF3111';
    document.querySelector('#player-current-box-2').style.backgroundColor = '#BF3111';
    document.querySelector('.btn-new i').style.color = '#BF3111';
    document.querySelector('.btn-roll i').style.color = '#BF3111';
    document.querySelector('.btn-hold i').style.color = '#BF3111';


    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".active .player-name::after {color: #BF3111;}";

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#titleGame h1:hover {color: #A92C10;}";

    // document.querySelector('.after-element').style.color = 'Blue';
    // document.querySelector('.active .player-name ::after').style.color = 'Blue';

    document.querySelector('.player-name').style.color = '#000';
    document.querySelector('#name-1').style.color = '#BF3111';
    document.querySelector('#score-1').style.color = '#BF3111';
    document.querySelector('.player-0-panel').style.backgroundColor = '#f8c9cd';
    document.querySelector('.player-1-panel').style.backgroundColor = '#fff';
    document.body.style.backgroundColor = "#3b0b04";

    document.querySelector('#fname').style.borderColor = '#BF3111';

});

//COLOR-2 Finish <--



//COLOR-3 --> Start

document.getElementById('color-3').addEventListener('click', function () {
    document.querySelector('.player-score').style.color = '#F27405';
    document.querySelector('#player-current-box-1').style.backgroundColor = '#F27405';
    document.querySelector('#player-current-box-2').style.backgroundColor = '#F27405';
    document.querySelector('.btn-new i').style.color = '#F27405';
    document.querySelector('.btn-roll i').style.color = '#F27405';
    document.querySelector('.btn-hold i').style.color = '#F27405';


    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".active .player-name::after {color: #F27405;}";

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#titleGame h1:hover {color: #FF891C;}";



    // document.querySelector('.after-element').style.color = 'Blue';
    // document.querySelector('.active .player-name ::after').style.color = 'Blue';

    document.querySelector('.player-name').style.color = '#000';
    document.querySelector('#name-1').style.color = '#F27405';
    document.querySelector('#score-1').style.color = '#F27405';
    document.querySelector('.player-0-panel').style.backgroundColor = '#f7e3c7';
    document.querySelector('.player-1-panel').style.backgroundColor = '#fff';
    document.body.style.backgroundColor = "#5e2c06";

    document.querySelector('#fname').style.borderColor = '#F27405';

});

//COLOR-3 Finish <--



//COLOR-4 Start -->


document.getElementById('color-4').addEventListener('click', function () {
    document.querySelector('.player-score').style.color = '#0bb223';
    document.querySelector('#player-current-box-1').style.backgroundColor = '#0bb223';
    document.querySelector('#player-current-box-2').style.backgroundColor = '#0bb223';
    document.querySelector('.btn-new i').style.color = '#0bb223';
    document.querySelector('.btn-roll i').style.color = '#0bb223';
    document.querySelector('.btn-hold i').style.color = '#0bb223';


    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = ".active .player-name::after {color: #0bb223;}";

    var styleElem = document.head.appendChild(document.createElement("style"));
    styleElem.innerHTML = "#titleGame h1:hover {color: #0bb223;}";

    // document.querySelector('.after-element').style.color = 'Blue';
    // document.querySelector('.active .player-name ::after').style.color = 'Blue';

    document.querySelector('.player-name').style.color = '#000';
    document.querySelector('#name-1').style.color = '#0bb223';
    document.querySelector('#score-1').style.color = '#0bb223';
    document.querySelector('.player-0-panel').style.backgroundColor = '#e2fff3';
    document.querySelector('.player-1-panel').style.backgroundColor = '#fff';
    document.body.style.backgroundColor = "#012633";

    document.querySelector('#fname').style.borderColor = '#0bb223';

});




