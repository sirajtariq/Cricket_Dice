// Cricket game in JavaScript
const cards = [
    "Single | 1",
    "Double | 2",
    "Triple | 3",
    "Gone Gone FOOUR | 4",
    "Wide ball Missed by WK | 5",
    "Long Long SIXX | 6",
    "No-Ball Free Hit | 1",
    "Wide ball | 1",
    "Run out | 1",
    "Catch out | 1",
    "Stump out | 1",
    "Wicket out | 1",
    "Hit-Wicket out | 1",
    "l.B.W out | 1",
    "Dot Ball | 0",
  ];
  
  function playGame() {
    let computerRuns = 0;
    let computerWickets = 0;
    let playerRuns = 0;
    let playerWickets = 0;
    let noBallFlag = false;
  
    // Computer's turn
    while (true) {
      const computerTurn = Math.floor(Math.random() * cards.length);
      const cCard = parseInt(cards[computerTurn].split("|")[1]);
  
      if (noBallFlag) {
        noBallFlag = false;
        if (cards[computerTurn].includes("Run out")) {
          computerWickets++;
        } else if (!cards[computerTurn].includes("out")) {
          computerRuns += cCard;
        }
      } else {
        if (cards[computerTurn].includes("No-Ball")) {
          computerRuns++;
          noBallFlag = true;
        } else if (cards[computerTurn].includes("out")) {
          if (!noBallFlag) {
            computerWickets++;
          }
        } else {
          computerRuns += cCard;
        }
      }
  
      console.log(cards[computerTurn].split("|")[0]);
      console.log("Computer's Runs: ", computerRuns);
      console.log("Computer's Wickets: ", computerWickets);
  
      if (computerWickets === 5) {
        console.log("Target: ", computerRuns + 1);
        break;
      }
    }
  
    const target = computerRuns + 1;
  
    // Player's turn
    while (true) {
      console.log("Pick a card (1-15):");
      const input = prompt("Enter a number (1-15): ");
      const index = parseInt(input) - 1;
  
      if (isNaN(index) || index < 0 || index >= cards.length) {
        console.log("Invalid Number. Please Enter a Number Only in 1 to 15.");
        continue;
      }
  
      const cardValue = parseInt(cards[index].split("|")[1]);
  
      if (noBallFlag) {
        noBallFlag = false;
        if (cards[index].includes("Run out")) {
          playerWickets++;
        } else if (!cards[index].includes("out")) {
          playerRuns += cardValue;
        }
      } else {
        if (cards[index].includes("No-Ball")) {
          playerRuns++;
          noBallFlag = true;
        } else if (cards[index].includes("out")) {
          if (!noBallFlag) {
            playerWickets++;
          }
        } else {
          playerRuns += cardValue;
        }
      }
  
      console.log(cards[index].split("|")[0]);
      console.log("Total Runs: ", playerRuns);
      console.log("Wickets: ", playerWickets);
  
      if (playerRuns === computerRuns && playerWickets === 5) {
        console.log("MATCH TIED!!😃");
        break;
      }
      if (playerRuns >= target) {
        console.log("YOU WON!!😊");
        break;
      }
      if (playerWickets === 5) {
        console.log("YOU LOSE!!😢");
        break;
      }
    }
  
    const playAgain = prompt("Do you want to play again? (yes/no): ").toLowerCase();
    if (playAgain === "yes") {
      playGame();
    } else {
      console.log("Thanks for Playing!❤");
    }
  }
  
  playGame();
  