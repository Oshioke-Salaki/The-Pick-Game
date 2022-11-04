'use strict';

//Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const newGame = document.querySelector('.btn--new');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const players = document.querySelectorAll('.player');
const currentScores = document.querySelectorAll('.current-score');

let scores, currentScore, activePlayer, playing;

const init = function() {
    //Starting conditions
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
};

init();

const changePlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

function rollDiceFxn() {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6 + 1);
        diceEl.setAttribute('src', `dice-${dice}.png`);
        diceEl.classList.remove('hidden');

        if (dice === 1) {
            changePlayer();
        } else {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
        }

        console.log(dice);
    }
}

function holdFxn() {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        if (scores[activePlayer] >= 10) {
            playing = false;
            diceEl.classList.add('hidden');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        } else {
            changePlayer();
        }
    }
}

newGame.addEventListener('click', init);

btnRoll.addEventListener('click', rollDiceFxn);

btnHold.addEventListener('click', holdFxn);