console.log("LOADED");

let humanScore = 0, compScore = 0;
let gamecount = { current: 1, max: 5 };
let gameCountMsg = "";

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

    let msg = gameCountMsg + `\n\nYou chose: ${humanChoice}\nComputer chose: ${computerChoice.val}`;

    if (humanChoice === computerChoice.val) {
        console.log("draw");
        alert(msg + "\n\n" + "DRAW!!!!!");
    } else {
        if (computerChoice.weakness === humanChoice) {
            console.log("You Win!!!");
            alert(msg + "\n\n" + "You Win!!!");
            humanScore++;
        } else {
            console.log("comp win");
            alert(msg + "\n\n" + "You Lose :( :( :(");
            compScore++;
        }
    }
}

function playGame() {

    for (; gamecount.current <= gamecount.max; gamecount.current++) {
        gameCountMsg = `Current Game: ${gamecount.current} of ${gamecount.max}`;
        playRound(getHumanChoice(), getComputerChoice());
    }

    let finalMsg = `Your score: ${humanScore}\nComputer score: ${compScore}`;

    if (humanScore === compScore) {
        alert(finalMsg + "\n\n" + "Game is a Draw...");
    } else {
        if (humanScore > compScore) {
            alert(finalMsg + "\n\n" + "You Win!!!");
        } else {
            alert(finalMsg + "\n\n" + "You Lose :( :( :(");
        }
    }
}

playGame();