"use strict";

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => getComputerChoice())

// to randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
const getComputerChoice = () => {
  console.log("getComputerChoice");
}

// getComputerChoice();

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// plays single round of rock, paper, scissors and returns a string of "You Lose! Paper beats Rock"
const playRound = (playerSelection, computerSelection) => {
  const result = "You Lose! Paper beats Rock";
  return result;
};