console.log("LOADED");

let humanScore = 0, compScore = 0, rounds = 0;

const choices = [
    { val: "ROCK", weakness: "PAPER" },
    { val: "PAPER", weakness: "SCISSORS" },
    { val: "SCISSORS", weakness: "ROCK" }
];

let choiceBtns = document.querySelectorAll('#buttons > *');

let userStarted = false;

function uiSwitch() {
    if (userStarted == false) {
        document.querySelector('.initial-state').style.display = "none";
        document.querySelector('.game-screen').style.display = "flex";
        document.querySelector('.scoreboard').style.display = "flex";
        userStarted = true;
    }

}

let modal = document.querySelector("dialog");

choiceBtns.forEach(btn => {



    btn.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = 'rgba(177, 100, 100, 0.87)';
    });

    btn.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = "";
    });

    
})

function playRound(humanChoice, computerChoice) {

    let playerChoiceElem = document.querySelector('#user-selection');
    let aiChoiceElem = document.querySelector('#machine-selection');

    let playerChoice = humanChoice.id.toUpperCase();

    console.log(`You chose: ${playerChoice}`)
    console.log(`Computer chose: ${computerChoice.val}`)

    uiSwitch();

    playerChoiceElem.textContent = `You chose: ${playerChoice}`
    aiChoiceElem.textContent = `Computer chose: ${computerChoice.val}`

    if (playerChoice === computerChoice.val) {
        humanScore++;
        compScore++;
    } else {
        if (computerChoice.weakness === playerChoice) {
            humanScore++;
        } else {
            compScore++;
        }
    }

    let playerGraphic = document.querySelector('.player-score-graphic');

    let aiGraphic = document.querySelector('.computer-score-graphic');

    playerGraphic.textContent = humanScore;
    aiGraphic.textContent = compScore;

    rounds++;
    if (rounds == 5) {

        humanScore > compScore

        if (humanScore > compScore) {
            document.querySelector('#final-tally').textContent = "YOU WIN!!!";
        } else {
            document.querySelector('#final-tally').textContent = "YOU LOST!!!";
        }

        let board = document.querySelector('.scoreboard');

        let reloadBtn = document.querySelector('#reload-button');

        reloadBtn.style.display="inline-block";

        reloadBtn.onclick = () => location.reload();

        modal.appendChild(board);
        modal.showModal();
    }
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

choiceBtns.forEach(btn => {

    btn.addEventListener("click", (event) => {
        playRound(event.target, getComputerChoice());
    });
})
