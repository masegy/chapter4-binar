const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const player_win = document.getElementById("win-player");
const com_win = document.getElementById("win-com");
const both_draw = document.getElementById("draw");
const vs = document.getElementById("vs");

function getComputerChoice() {
  const choices = ["com-rock", "com-paper", "com-scissor"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

const disableInput = () => {
  document.querySelectorAll(".choice-player").forEach((input) => {
    input.setAttribute("disabled", "disabled");
  });
  document.querySelectorAll(".choice-player").forEach((choice) => {
    choice.classList.remove("hover");
    choice.style.cursor = "default";
  });
};

// hide versus info when result is visible
const hideVersus = () => (document.getElementById("vs").style.display = "none");

function win() {
  console.log("You win!!!");
  player_win.style.display = "block";
  both_draw.style.display = "none";
  com_win.style.display = "none";
  hideVersus();
  disableInput();
}
function draw() {
  console.log("Draw!");
  player_win.style.display = "none";
  both_draw.style.display = "block";
  com_win.style.display = "none";
  hideVersus();
  disableInput();
}
function lose() {
  console.log("You Lose!!!");
  player_win.style.display = "none";
  both_draw.style.display = "none";
  com_win.style.display = "block";
  hideVersus();
  disableInput();
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockcom-scissor":
    case "papercom-rock":
    case "scissorcom-paper":
      win();
      break;
    case "rockcom-paper":
    case "papercom-scissor":
    case "scissorcom-rock":
      lose();
      break;
    case "rockcom-rock":
    case "papercom-paper":
    case "scissorcom-scissor":
      draw();
      break;
  }
  console.log("User choice : " + userChoice);
  console.log("Comp choice : " + computerChoice.substring(4));
  document.getElementById(userChoice+"+choosen").classList.add("chosen");
  document.getElementById(computerChoice+"+choosen").classList.add("chosen");
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });
  paper_div.addEventListener("click", function () {
    game("paper");
  });
  scissor_div.addEventListener("click", function () {
    game("scissor");
  });
}

main();

const resetGame = () => {
  console.log("Game has been reset!");

  document.querySelectorAll(".choice-player").forEach((input) => {
    input.removeAttribute("disabled");
  });

  vs.style.display = "block";
  both_draw.style.display = "none";
  player_win.style.display = "none";
  com_win.style.display = "none";

  document.querySelectorAll(".choice-player").forEach((choice) => {
    choice.classList.add("choice-hover");
    choice.style.cursor = "pointer";
  });

  document.querySelectorAll(".choosen").forEach((figure) => {
    figure.classList.remove("chosen");
  });
};
