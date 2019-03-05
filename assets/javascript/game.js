//Variable declaration and assignment

//variable for possible word choices for game
var wordChoiceList = ["TERRAPIN", "SUGAREE", "WHARFRAT", "PROPHET", "TRUCKIN", "MUSIC", "DEVIL", "STRANGER", "FRANCE", "MOUNTAIN", "SHAKEDOWN"];
var usedWords = [];
//variable for randomly selected word
var computerChoice;
//variables to hold player letter guesses
var rightGuess = [];
var correctString = "";
var userGuess;
var wrongGuesses = [];
//regex variable for making sure only alpha characters are pressed
var alphaExp = /^[a-zA-Z]+$/;
//starting point variables
var guessCount = 12;
var winCount = 0;
//variables to replace html spans and h2
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word");
var guessesLeftText = document.getElementById("guesses-left");
var lettersGuessedText = document.getElementById("letters-guessed");
var hiddenText = document.getElementById("hidden");

//Functions
function resetGame() {
    randomNoRepeat(wordChoiceList);
    resetCurrentWord();
    currentWordText.textContent = correctString;
    wrongGuesses = [];
    lettersGuessedText.textContent = wrongGuesses;
    guessCount = 12;
    guessesLeftText.textContent = guessCount;
}

function resetCurrentWord() {
    rightGuesses = [];
    for (var i = 0; i < computerChoice.length; i++) {
        rightGuesses.push('-');
        correctString = rightGuesses.join("");
    }
}

function randomNoRepeat(arr) {
    if (arr.length === 0) {
        arr.splice(0, arr.length, ...usedWords);
        usedWords = [];
        console.log("replaced array");
    }
    computerChoice = arr[Math.floor(Math.random() * arr.length)];
    var index = arr.indexOf(computerChoice);
    arr.splice(index, 1);
    usedWords.push(computerChoice);
}

//initial page display info
guessesLeftText.textContent = guessCount;
randomNoRepeat(wordChoiceList);
resetCurrentWord();
currentWordText.textContent = correctString;

//Game itself
document.onkeyup = function (event) {

    // Determines which key was pressed.
    userGuess = event.key.toUpperCase();

    //checks to make sure key pressed was a letter
    if (userGuess.match(alphaExp)) {
        //if correct letter guessed find all instances of it and replace - with letter
        if (computerChoice.indexOf(userGuess) !== -1) {
            for (var j = 0; j < computerChoice.length; j++) {
                if (computerChoice[j] == userGuess) {
                    rightGuesses[j] = computerChoice[j];
                    correctString = rightGuesses.join("");
                    currentWordText.textContent = correctString;
                }
            }
        }
        //if wrong letter guessed and letter hasn't already been guessed
        else if ((computerChoice.indexOf(userGuess) === -1) && (wrongGuesses.indexOf(userGuess) === -1)) {
            guessCount--;
            guessesLeftText.textContent = guessCount;
            wrongGuesses.push(userGuess);
            lettersGuessedText.textContent = wrongGuesses;
        }
        //checks win condition
        if (computerChoice === correctString) {
            winCount++;
            winsText.textContent = winCount;
            document.getElementById("hidden").style.display = "block";
            hiddenText.textContent = "Fire on the Mountain";
            resetGame();
        }
        //checks loss condition
        if (guessCount === 0) {
            resetGame();
        }

    }
    //if letter key wasn't pressed pops up alert
    else {
        alert("Please enter only letters");
    }
};