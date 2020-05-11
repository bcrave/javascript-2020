/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, dice, gamePlaying, previousRoll;

init();

// Roll
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
    //   1. Get random Number
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;

    //   2. Display the result
    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";

    document.getElementById("dice-1").src = "./images/dice-" + dice1 + ".png";
    document.getElementById("dice-2").src = "./images/dice-" + dice2 + ".png";

    //   3. Update score if rolled number is greater than 1

    // rules for two dice
    if (dice1 !== 1 && dice2 !== 1) {
      increaseRoundScore();
    } else {
      nextPlayer();
    }

    // rules for one die
    /*
    if (dice === 1) {
      nextPlayer();
    } else if (previousRoll === 6 && dice === 6) {
      scores[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent =
        scores[activePlayer];
      nextPlayer();
    } else {
      increaseRoundScore();
    }
    */
  }
});

// Hold
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
    // 1. Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;

    // 2. Update UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

    var input = document.querySelector(".winning-score").value;
    var winningScore;

    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    // 3. Check if player won the game
    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
      //   next player
      nextPlayer();
    }
  }
});

function increaseRoundScore() {
  roundScore += dice1 + dice2;
  document.querySelector("#current-" + activePlayer).textContent = roundScore;
  // previousRoll = dice; << for one-die games
}

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  previousRoll = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

/*
CHALLNGE 6:
Change the game to follow these rules:

1. A player loses his ENTIRE score when he rolls two 6's in a row.  After that, it's the next player's turn. (Hint: always have the previous dice roll in a separate variable.) ****DONE****
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (HINT: you can read that value with the ".value" property in JavaScript.)  ****DONE BUT UGLY****
3. Add another dice to the game so that there are two dices.  The player loses his current score when one of them rolls 1. (HINT: You will need CSS to position the dice, so check out the CSS for the first one.)
*/
