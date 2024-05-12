
    let humanScore = 0, computerScore = 0;
    let humanChoice, computerChoice; 

    /*function getHumanChoice(){
        let userChoice = prompt("What do you pick?"); 

        if (/scissors/i.test(userChoice) || /rock/i.test(userChoice) || /paper/i.test(userChoice)) {
            return userChoice.toLowerCase();
        }
        else {
            alert("Please enter a VALID answer.")
            getHumanChoice();
        }
    }*/

    const rockButton = document.getElementById("rock");
    const paperButton = document.getElementById("paper");
    const scissorsButton = document.getElementById("scissors");
    const results = document.getElementById("results");

    const buttons = document.querySelectorAll("button");

    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            if (humanScore < 5 && computerScore < 5) {
                humanChoice = button.textContent.toLowerCase();
                playRound();
            }
        });
    });

    if (humanScore === 5) {
        alert("Human wins!");
    }
    else if (computerScore === 5) {
        alert("Computer wins!");
    }

    //functions

    function getComputerChoice(){

        let randomNum = Math.random();
        
        if (randomNum < 1/3) {
            return "rock";
        }
        else if (randomNum < 2/3 && randomNum > 1/3) {
            return "paper";
        }
        else {
            return "scissors";
        }
    }
    function playRound(){
        computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } 

        else if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                console.log("Human wins!");
                humanScore++;
            } else {
                console.log("Computer wins!");
                computerScore++;
            }
        } 
        
        else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("Human wins!");
                humanScore++;
            } else {
                console.log("Computer wins!");
                computerScore++;
            }
        } 
        
        else if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                console.log("Human wins!");
                humanScore++;
            } else {
                console.log("Computer wins!");
                computerScore++;
            }
        }
        updateScoreboard();
    }

    function updateScoreboard(){
        results.textContent = "Human: " + humanScore + "\nComputer: " + computerScore;
    }


