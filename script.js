console.log("LOADED");

let humanScore = 0, compScore = 0;

let gamecount = { current: 0, max: 5 };
let gameCountMsg = "";

console.clear()

let btns = document.querySelectorAll("button");

let body = document.querySelector("body");

let scoreboardStr = "";

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

    let userSelection = document.querySelector("#user-selection");
    let roboSelection = document.querySelector("#machine-selection");
    let scoreboard = document.querySelector("#score-comp");

    userSelection.textContent = `You chose: ${humanChoice}`;
    roboSelection.textContent = `Computer chose: ${computerChoice.val}`;


    let msg = gameCountMsg + `\n\nYou choooooose: ${humanChoice}\nComputer chose: ${computerChoice.val}`;

    if (humanChoice === computerChoice.val) {
        console.log("draw");
        //alert(msg + "\n\n" + "DRAW!!!!!");
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

    let finalMsg = `Your score: ${humanScore}\nComputer score: ${compScore}`;

    console.log(finalMsg);

    scoreboard.textContent = finalMsg;

    gamecount.current++;

    console.log(gamecount.current);

    if (gamecount.current == gamecount.max) {
        alert("game ended....");
    }
}

function playGame() {

    // for (; gamecount.current <= gamecount.max; gamecount.current++) {
    //     gameCountMsg = `Current Game: ${gamecount.current} of ${gamecount.max}`;
    //     playRound(getHumanChoice(), getComputerChoice());
    // }



    // if (humanScore === compScore) {
    //     alert(finalMsg + "\n\n" + "Game is a Draw...");
    // } else {
    //     if (humanScore > compScore) {
    //         alert(finalMsg + "\n\n" + "You Win!!!");
    //     } else {
    //         alert(finalMsg + "\n\n" + "You Lose :( :( :(");
    //     }
    // }
}

//playGame();

btns.forEach(btn => {
    console.log(`Adding listeners`);

    btn.onclick = () => {
        playRound(btn.textContent, getComputerChoice());
    };
})


// console.log(`Computer chose: ${getComputerChoice().val}`)
// console.log(`You chose: ${btn.textContent}`)
//let robo = `Computer chose: ${getComputerChoice().val}`;
//let human = `You chose: ${btn.textContent}`;