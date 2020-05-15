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
            var playerA;
            activePlayer === 0 ? playerA = localStorage.getItem('textvalue-1') : playerA = localStorage.getItem('textvalue-2')
            alert('Double 6 for ' + playerA.toUpperCase() + ' !');
            nextPlayer();
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] = 0;;

        }

    }
});

//BUTTON ROLL DICE Finish <--


document.querySelector('.boxtitle-1').innerHTML = 'Chalange for: ' + '<br>' + localStorage.getItem('textvalue-2').charAt(0).toUpperCase() + localStorage.getItem('textvalue-2').slice(1);
document.querySelector('.boxtitle-2').innerHTML = 'Chalange for: ' + '<br>' + localStorage.getItem('textvalue-1').charAt(0).toUpperCase() + localStorage.getItem('textvalue-1').slice(1);



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

                var x = document.getElementById("myAudio");
                x.play();

                document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice-0').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

                if(document.querySelector('#name-0').textContent === 'Winner!'){
                    document.getElementById('chalanhe-box-1').style.marginLeft = '100px';
                    document.getElementById('chalanhe-box-1').style.transition = '1.5s';
                }

                else if(document.querySelector('#name-1').textContent === 'Winner!') {
                    document.getElementById('chalanhe-box-2').style.marginRight = '100px';
                    document.getElementById('chalanhe-box-2').style.transition = '1.5s';
                }

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

    document.getElementById('chalanhe-box-1').style.marginLeft = '420px';
    document.getElementById('chalanhe-box-1').style.transition = '1.5s';

    document.getElementById('chalanhe-box-2').style.marginRight = '420px';
    document.getElementById('chalanhe-box-2').style.transition = '1.5s';

    document.getElementById("box-number").reset();


    document.querySelector('.dice-0').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = localStorage.getItem('textvalue-1');
    document.getElementById('name-1').textContent = localStorage.getItem('textvalue-2');

    // document.getElementById('name-0').textContent = ;
    // document.getElementById('name-1').textContent = 'Player 2';
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

var changeColors = document.querySelectorAll('#color_change .fix_color');
var root = document.querySelector(':root');

changeColors.forEach((change) => {
    change.addEventListener('click', (e) => {
        root.style.setProperty('--theme-color', e.target.style.backgroundColor);
    })

})


// CHANGE COLOR

function colorChangeFunction (idModel, colorHex, bodyBColor) {
    document.getElementById(idModel).addEventListener('click', () => {

        document.documentElement.style
            .setProperty('--model-8', colorHex);

        document.body.style.backgroundColor = bodyBColor;
    })
}
colorChangeFunction('color-1', '#b3cef6', '#010D26');
colorChangeFunction('color-2', '#f8c9cd', '#3b0b04');
colorChangeFunction('color-3', '#f7e3c7', '#5e2c06');
colorChangeFunction('color-4', '#e2fff3', '#012633');
colorChangeFunction('color-5', '#d8c7d2', '#31002A');
colorChangeFunction('color-6', '#e1e1e1', '#000');
colorChangeFunction('color-7', '#ffcee3', '#674053');


document.getElementById('chalangeOn1').innerHTML = localStorage.getItem('chalange-text-1').toUpperCase();
document.getElementById('chalangeOn2').innerHTML = localStorage.getItem('chalange-text-2').toUpperCase();


document.getElementById('namePlayer_1').innerHTML = localStorage.getItem('textvalue-1');
document.getElementById('namePlayer_2').innerHTML = localStorage.getItem('textvalue-2');




/*



 */






