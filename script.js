const choices = ["Rock", "Paper", "Scissors"];
const icons = {Rock: "✊", paper: "✋", Scissors:"✌"};
const beats = {Rock: "Scissors", paper: "Rock", Scissors:"Paper"};
let wins = 0;
let losses = 0;
let draws = 0;

const resultBox =  document.querySelector("#result-box");
const result = document.querySelector("#result");
const reason = document.querySelector("#reason");


function play(playerChoice) {
  const countdownEl = document.querySelector("#countdown");
  const steps = ["Rock...", "Paper...", "Scissors...", "Shoot!"];
  let i = 0;

  countdownEl.textContent = steps[i];

  const interval = setInterval(function () {
    i++;
    if (i < steps.length) {
      countdownEl.textContent = steps[i];
    } else {
      clearInterval(interval);
      countdownEl.textContent = "";
      showResult(playerChoice);
    }
  }, 350);
}

function showResult(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.querySelector("#you").textContent = icons[playerChoice];
  document.querySelector("#computer").textContent = icons[computerChoice];
  resultBox.className = "result-box";

  if (playerChoice === computerChoice) {
    draws++;
    result.textContent = "Draw";
    reason.textContent = "You both picked " + playerChoice;
  } else if (beats[playerChoice] === computerChoice) {
    wins++;
    result.textContent = "You win";
    reason.textContent = playerChoice + " beats " + computerChoice;
    resultBox.classList.add("win");
  } else {
    losses++;
    result.textContent = "You lose";
    reason.textContent = computerChoice + " beats " + playerChoice;
    resultBox.classList.add("lose");
  }

  document.querySelector("#wins").textContent = wins;
  document.querySelector("#losses").textContent = losses;
  document.querySelector("#draws").textContent = draws;
}
document.querySelector("#rock").addEventListener("click", function (){
    play("Rock");
})

document.querySelector("#paper").addEventListener("click", function (){
    play("Paper");
})

document.querySelector("#scissors").addEventListener("click", function (){
    play("Scissors");
})

document.querySelector("#reset").addEventListener("click", function (){
    resetGame();
})
function resetGame(){
    wins = 0;
    losses = 0;
    draws = 0;
    document.querySelector("#wins").textContent = 0;
    document.querySelector("#losses").textContent = 0;
    document.querySelector("#draws").textContent = 0;
    document.querySelector("#you").textContent = "?";
    document.querySelector("#computer").textContent = "?";
    result.textContent = "Pick your Move";
    reason.textContent = "";
    resultBox.className = "result-box";
}