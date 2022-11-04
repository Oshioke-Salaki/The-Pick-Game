'use strict';

//Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const players = document.querySelectorAll('.player');
const currentScores = document.querySelectorAll('.current-score');

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
// let currentScore1 = 0;

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

function rollDiceFxn() {
    const dice = Math.trunc(Math.random() * 6 + 1);
    diceEl.setAttribute('src', `dice-${dice}.png`);
    diceEl.classList.remove('hidden');

    if (dice === 1) {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    } else {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent =
            currentScore;
    }

    console.log(dice);
}

btnRoll.addEventListener('click', rollDiceFxn);

btnHold.addEventListener('click', holdFxn);