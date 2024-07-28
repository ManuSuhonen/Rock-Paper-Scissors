console.log("LOADED");

const choices = ["ROCK", "PAPER", "SCISSORS"];
let humanScore = 0, compScore = 0;

function getComputerChoice() {
    let val = Math.floor(Math.random() * 3);
    let selection = choices[val];
    return selection;
}

function getHumanChoice() {
    let choice = "";

    while (!(choices.find((x)=>x === choice))) {
        let input = prompt("Please enter one of the following: Rock, Paper, Scissors");
        choice = input.toUpperCase();
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`)
    console.log(`Computer chose: ${computerChoice}`)
    
    let msg = `You chose: ${humanChoice}\nComputer chose: ${computerChoice}`;
    
    if (humanChoice === computerChoice) {
        console.log("It is a draw-_-");
        msg = msg + `\n\nIt is a draw-_-`
        alert(msg)
        return;
    }

    let rockPaper = (humanChoice === "ROCK" && computerChoice === "PAPER");
    let paperScissors = (humanChoice === "PAPER" && computerChoice === "SCISSORS");
    let scissorsRock = (humanChoice === "SCISSORS" && computerChoice === "ROCK");
    
    if (rockPaper || paperScissors || scissorsRock) {
        compScore++;
        console.log("Computer Wins!!!");
        msg = msg + `\n\nComputer Wins!!!`;
        alert(msg);
    } else {
        // In all other scenarios, player wins.
        humanScore++;
        console.log("You Win!!!");
        msg = msg + `\n\nYou Win!!!`;
        alert(msg);
    }

    alert(`You: ${humanScore}\nComputer: ${compScore}`);
}


playRound(getHumanChoice(), getComputerChoice());
