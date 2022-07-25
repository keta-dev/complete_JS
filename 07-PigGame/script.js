// declare the global variable

const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceImg = document.querySelector(".dice");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// to set the scores to zero ""
score0El.textContent = 0;
score1El.textContent = 0;
diceImg.style.display = "none";

// To display the player current score
let playing = true;
let currentScore = 0;
let activePlayer = 0;
const score = [0, 0];

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. dynamically roll the different dice image
    diceImg.style.display = "block";
    diceImg.src = `assets/dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Next player's turn
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. add current score to active player's score
    score[activePlayer] += currentScore;
    // score[1] = score[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // 2.check if the players score is >= 100
    if (score[activePlayer] >= 30) {
      // finish the game
      playing = false;
      diceImg.style.display = "none";
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function() {
  // btnHold();
  // btnRoll();
  window.location.reload()
})