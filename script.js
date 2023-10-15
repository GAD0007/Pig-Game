'use strict';

// // /selecting elements/
// const score0EL = document.querySelector('#score--0');
// const score1EL = document.querySelector('#score--1');
// const diceEL = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const current0EL = document.querySelector('#current--0');
// const current1EL = document.querySelector('#current--1');
// const player0Class = document.querySelector('.player--0');
// const player1Class = document.querySelector('.player--1');

// const scores = [0, 0];
// let activePlayer = 0;
// score0EL.textContent = 0;
// score1EL.textContent = 0;
// diceEL.classList.add('hidden');
// let currentScore = 0;

// document.querySelector('#current--1').textContent;
// const min = 1;
// const max = 6;

// // Use Math.floor() to round down the floating-point number to an integer

// // let randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;

// // rolling dice button
// btnRoll.addEventListener('click', function () {
//   // generate random dice
//   const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
//   console.log(randomInteger);

//   //make dice visibe
//   diceEL.classList.remove('hidden');
//   diceEL.src = `dice-${randomInteger}.png`;

//   //   if roll is not 1
//   if (randomInteger !== 1) {
//     currentScore = currentScore + randomInteger;
//     document.getElementById(`current--${activePlayer}`).textContent =
//       currentScore;
//   } else {
//     // if roll is 1
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     player0Class.classList.toggle('player--active');
//     player1Class.classList.toggle('player--active');

//     currentScore = 0;
//     // if (activePlayer === 0) {
//     //     activePlayer= 1

//     // } else {
//     //     activePlayer =  0

//     // }
//   }
// });

// btnHold.addEventListener('click', function () {
//   scores[activePlayer] = scores[activePlayer] + currentScore;
//   document.getElementById(`score--${activePlayer}`).textContent =
//     scores[activePlayer];
//   currentScore = 0;
//   document.getElementById(`current--${activePlayer}`).textContent =
//     currentScore;
//   activePlayer = activePlayer === 0 ? 1 : 0;
//   player0Class.classList.toggle('player--active');
//   player1Class.classList.toggle('player--active');

// });

// targeting elements
const score0Pl = document.getElementById('score--0');
const score1Pl = document.getElementById('score--1');
const currentScore0Pl = document.getElementById('current--0');
const currentScore1Pl = document.getElementById('current--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnReset = document.querySelector('.btn--new');
const player0Bg = document.querySelector('.player--0');
const player1Bg = document.querySelector('.player--1');
const scores = [0, 0];

score0Pl.textContent = 0;
score1Pl.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
dice.classList.add('hidden');
let playing = true;

const min = 1;
const max = 6;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Bg.classList.toggle('player--active');
  player1Bg.classList.toggle('player--active');
};

// roll dice btn
btnRoll.addEventListener('click', function () {
  if (playing) {
    // generating random roll
    const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomInteger);

    //   displaying the dice roll
    dice.classList.remove('hidden');

    dice.src = `dice-${randomInteger}.png`;

    if (randomInteger !== 1) {
      // if roll is diffrent from 1
      currentScore = currentScore + randomInteger;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
    // if roll is 1
    else {
      // changing active player
      switchPlayer();
    }
  }
});

// hold button
btnHold.addEventListener('click', function () {
  //
  if (playing) {
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document.querySelector('.player').classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
    } else {
      switchPlayer();
    }
  }
});

// reset the game
btnReset.addEventListener('click', function () {
  scores[0] = scores[0] - scores[0];
  document.getElementById('score--0').textContent = scores[0];
  scores[1] = scores[1] - scores[1];
  document.getElementById('score--1').textContent = scores[1];
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  dice.classList.add('hidden');
  player0Bg.classList.add('player--active');
  player1Bg.classList.remove('player--active');
});
