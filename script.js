console.log("LOADED");

let humanScore = 0, compScore = 0;

let gamecount = { current: 0, max: 5 };
let gameCountMsg = "";

console.clear()

let btns = document.querySelectorAll("button");

let body = document.querySelector("body");

let scoreboardStr = "";

let userSelection = document.querySelector("#user-selection");
let roboSelection = document.querySelector("#machine-selection");
let scoreboard = document.querySelector("#score-comp");
let end = document.querySelector("#end-screen");

let btnHolder = document.querySelector("button").parentElement
let retryBtn = document.createElement("button");

retryBtn.textContent = "Click here to retry"

retryBtn.addEventListener("click", () => {
    location.reload();
});


const choices = [
    { val: "ROCK", weakness: "PAPER" },
    { val: "PAPER", weakness: "SCISSORS" },
    { val: "SCISSORS", weakness: "ROCK" }
];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    let choice = "";

    while (!(choices.find((x) => x.val === choice))) {
        let input = prompt(gameCountMsg + "\n\nPlease enter one of the following: Rock, Paper, Scissors");
        choice = input.toUpperCase();
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`)
    console.log(`Computer chose: ${computerChoice.val}`)

    userSelection.textContent = `You chose: ${humanChoice}`;
    roboSelection.textContent = `Computer chose: ${computerChoice.val}`;


    let msg = gameCountMsg + `\n\nYou choooooose: ${humanChoice}\nComputer chose: ${computerChoice.val}`;

    if (humanChoice === computerChoice.val) {
        console.log("draw");
        humanScore++;
        compScore++;
    } else {
        if (computerChoice.weakness === humanChoice) {
            console.log("You Win!!!");
            //alert(msg + "\n\n" + "You Win!!!");
            humanScore++;
        } else {
            console.log("comp win");
            //alert(msg + "\n\n" + "You Lose :( :( :(");
            compScore++;
        }
    }

    let finalMsg = `Your score: ${humanScore}.\nComputer score: ${compScore}.`;

    console.log(finalMsg);

    scoreboard.textContent = finalMsg;

    gamecount.current++;

    console.log(gamecount.current);

    if (gamecount.current == gamecount.max) {
        let sum = humanScore-compScore;
        if (sum > 0) {
            end.textContent = "You WIN!!!!!"
        } else {
            end.textContent = "You lose :( :(  :("
        }

        alert(end.textContent);

        btnHolder.innerHTML = "";
        btnHolder.appendChild(retryBtn);
    }
}

btns.forEach(btn => {
    console.log(`Adding listeners`);

    btn.onclick = () => {
        playRound(btn.textContent, getComputerChoice());
    };

})