const Game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro .btn");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const resetGame = document.querySelector(".resetGame");

    playBtn.addEventListener("click", function () {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
      resetGame.classList.add("fadeIn");
      match.style.transition = "opacity 0.5s ease 0.5s";
      resetGame.style.transition = "opacity 0.5s ease 0.5s";
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    //set animation to 0
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //Comptuer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        //set img to default
        playerHand.src = `assets/images/rock.png`;
        computerHand.src = `assets/images/rock.png`;
        //Freezes for 2s
        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `assets/images/${this.textContent}.png`;
          computerHand.src = `assets/images/${computerChoice}.png`;
        }, 2000);
        //add Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const gameWinner = () => {
    let winnerPoint = 3;
    if (pScore === winnerPoint) {
      console.log("win player");
      return;
    } else if (cScore === winnerPoint) {
      console.log("win Computer");
      return;
    } else {
      return;
    }
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        gameWinner();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        gameWinner();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        gameWinner();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        gameWinner();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "paper") {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        gameWinner();
        return;
      } else {
        winner.textContent = "Computer wins";
        cScore++;
        updateScore();
        gameWinner();
        return;
      }
    }
  };

  const resetGame = () => {
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const resetBtn = document.querySelector(".reset-btn");
    const winner = document.querySelector(".winner");
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");

    resetBtn.addEventListener("click", function () {
      pScore = 0;
      cScore = 0;
      playerHand.src = `assets/images/rock.png`;
      computerHand.src = `assets/images/rock.png`;
      winner.textContent = "Choose an option";
      updateScore();
      return;
    });
  };

  //call all the inner function
  startGame();
  playMatch();
  resetGame();
};

export default Game