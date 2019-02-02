var lettersGuessed = [];
var guessesLeft = 9;
var wins = 0;
var losses = 0;

var computerGuess = String.fromCharCode(Math.round(Math.random() * 26) + 97);
console.log(computerGuess);

document.onkeydown = function(event) {
  var keyPress = String.fromCharCode(event.keyCode).toLowerCase();

  addLetter(keyPress);
};

function addLetter(usersKeypress) {
  var repeatGuess = lettersGuessed.some(function(item) {
    return item === usersKeypress;
  });

  if (repeatGuess) {
    alert(usersKeypress + " already guessed. Try again!");
  } else {
    lettersGuessed.push(usersKeypress);
    console.log(lettersGuessed);

    showLettersGuessed();
    guessMatch(usersKeypress);
  }
}

function showLettersGuessed() {
  var tempStr = lettersGuessed.join(", ");
  document.getElementById("guessesSoFar").innerHTML = tempStr;
}

function guessMatch(character) {
  console.log(character);
  console.log(computerGuess);

  if (character === computerGuess) {
    alert("You win!");
    wins = wins + 1;
    showWins();
    resetVariables(lettersGuessed, guessesLeft, computerGuess);
  } else if (guessesLeft === 0) {
    alert("You lost! Try again.");
    losses = losses + 1;
    showLosses();
    resetVariables(lettersGuessed, guessesLeft);
  } else {
    guessesLeft = guessesLeft - 1;
    showGuessesRemaining();
  }
}

//function to show wins
function showWins() {
  document.getElementById("numWins").innerHTML = wins;
}

//function to show losses
function showLosses() {
  document.getElementById("numLosses").innerHTML = losses;
}
//function to show guesses remaining
function showGuessesRemaining() {
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
}

function resetVariables() {
  lettersGuessed = [];
  guessesLeft = 10;
  computerGuess = String.fromCharCode(Math.round(Math.random() * 26) + 97);
  console.log(computerGuess);
}

function startGame() {
  showGuessesRemaining();
  showWins();
  showLosses();
}
