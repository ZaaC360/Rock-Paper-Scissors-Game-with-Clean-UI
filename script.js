let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let userScore = 0;
let compScore = 0;

rock.addEventListener("click", function() {
    playRound("rock");
});

paper.addEventListener("click", function() {
    playRound("paper");
});

scissors.addEventListener("click", function() {
    playRound("scissors");
});

function playRound(userChoice) {
    let choices = ["rock", "paper", "scissors"];
    let resultText = document.getElementById("result-text");
    let compChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === compChoice) {
        resultText.textContent = "It's a tie!";
    } else if ((userChoice === "rock" && compChoice === "scissors") ||
               (userChoice === "paper" && compChoice === "rock") ||
               (userChoice === "scissors" && compChoice === "paper")) {
        userScore++;
        resultText.textContent = `You win! ${userChoice} beats ${compChoice}.`;
    } else {
        compScore++;
        resultText.textContent = `You lose! ${compChoice} beats ${userChoice}.`;
    }

    document.getElementById("user-score").textContent = `User: ${userScore}`;
    document.getElementById("comp-score").textContent = `Computer: ${compScore}`;
}

