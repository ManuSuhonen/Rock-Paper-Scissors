console.log("LOADED");

let humanScore = 0, compScore = 0;

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
        let input = prompt("Please enter one of the following: Rock, Paper, Scissors");
        choice = input.toUpperCase();
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`)
    console.log(`Computer chose: ${computerChoice.val}`)

    let msg = `You chose: ${humanChoice}\nComputer chose: ${computerChoice.val}`;


    if (humanChoice === computerChoice.val) {
        console.log("draw");
        alert(msg + "\n\n" + "DRAW!!!!!");
    } else {
        if (computerChoice.weakness === humanChoice) {
            console.log("You Win!!!");
            alert(msg + "\n\n" + "You Win!!!");
        } else {
            console.log("comp win");
            alert(msg + "\n\n" + "You Lose :( :( :(");
        }
    }
}


playRound(getHumanChoice(), getComputerChoice());
