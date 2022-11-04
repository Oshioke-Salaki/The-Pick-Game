'use strict';

//Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--2');

const players = document.querySelectorAll('.player');
const currentScores = document.querySelectorAll('.current-score');

let currentScore = 0;
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
        for (let i = 0; i < players.length; i++) {
            players[i].classList.contains('player--active') ?
                players[i].classList.remove('player--active') :
                players[i].classList.add('player--active');
        }
    } else {
        currentScore += dice;
        current0El.textContent = currentScore;
    }

    console.log(dice);
}

btnRoll.addEventListener('click', rollDiceFxn);