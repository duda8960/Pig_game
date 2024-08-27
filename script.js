'use strict';
// Definindo variáveis e início do jogo

/*
const scoreP = [
  document.getElementById('score--0'),
  document.getElementById('score--1'),
];
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const new_btn = document.querySelector('.btn--new');
const currentP0 = document.getElementById('current--0');
const currentP1 = document.getElementById('current--1');
const player_active = document.querySelector('.player--active');

let current_score, player, scores, playing;

const starting = function () {
  scoreP[1].textContent = 0;
  scoreP[0].textContent = 0;
  dice.classList.add('hidden');
  current_score = 0;
  scores = [0, 0];
  playing = true;
  player = 0;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
};
starting();

// BOTÃO ROLAR O DADO ✅

roll.addEventListener('click', function () {
  if (playing) {
    let dice_number = Math.floor(Math.random() * 6) + 1;

    dice.classList.remove('hidden');
    dice.src = `dice-${dice_number}.png`;

    if (dice_number !== 1) {
      current_score += dice_number;
      document.getElementById(`current--${player}`).textContent = current_score;
    } else {
      switchPlayer();
    }
  }
});

// BOTÃO GUARDAR PONTUAÇÃO ✅

hold.addEventListener('click', function () {
  if (playing) {
    scores[player] = current_score + scores[player];
    hold_value();

    if (scores[0] >= 80 || scores[1] >= 80) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${player}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${player}`)
        .classList.add('player--winner');
    } else {
      if (current_score > 0) {
        switchPlayer();
      }
    }
  }
});

const hold_value = function () {
  scoreP[player].textContent = scores[player];
  document.getElementById(`current--${player}`).textContent = 0;
};

//TROCAR JOGADOR ✅
const switchPlayer = function () {
  document.getElementById(`current--${player}`).textContent = 0;
  current_score = 0;
  player = player === 0 ? 1 : 0;

  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

// BOTÃO NOVO JOGO ✅
new_btn.addEventListener('click', function () {
  starting();
});
*/

const scoreP = [
  document.getElementById('score--0'),
  document.getElementById('score--1'),
];
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const btn_new = document.querySelector('.btn--new');
const currentP = [
  document.getElementById('current--0'),
  document.getElementById('current--1'),
];
let scores, player, current;

const start_game = function () {
  scores = [0, 0];
  scoreP[0].textContent = 0;
  scoreP[1].textContent = 0;
  current = 0;
  player = 0;
  currentP[0].textContent = 0;
  currentP[1].textContent = 0;
  dice.classList.add('hidden');
};
start_game();

btn_roll.addEventListener('click', function () {
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  console.log(diceNumber);

  dice.classList.remove('hidden');
  dice.src = `dice-${diceNumber}.png`;
  if (diceNumber !== 1) {
    current = current + diceNumber;
    currentP[player].textContent = current;
  } else {
    switchPlayer();
  }
});
btn_hold.addEventListener('click', function () {
  scores[player] += current;
  scoreP[player].textContent = scores[player];
  switchPlayer();
});

const switchPlayer = function () {
  current = 0;
  currentP[player].textContent = 0;
  player = player === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btn_new.addEventListener('click', start_game);
