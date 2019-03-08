//Variable declaration and assignment

//Array of objects and using object constructor and push to add them to Array
var objectList = [];
objectList.push(objConstructor("TERRAPIN","Terrapin Station","https://www.youtube.com/embed/3I7CLy70WtI?rel=0;&autoplay=1"));
objectList.push(objConstructor("SUGAREE","Sugaree","https://www.youtube.com/embed/Ld4wCgARzv0?rel=0;&autoplay=1"));
objectList.push(objConstructor("WHARF","Wharf Rat","https://www.youtube.com/embed/L3cXWl8AHUM?rel=0;&autoplay=1"));
objectList.push(objConstructor("PROPHET","Estimated Prophet","https://www.youtube.com/embed/CR5iB3ITGIU?rel=0;&autoplay=1"));
objectList.push(objConstructor("TRUCKIN","Truckin'","https://www.youtube.com/embed/SlwMmfLIkVE?rel=0;&autoplay=1"));
objectList.push(objConstructor("MUSIC","Music Never Stopped","https://www.youtube.com/embed/uRiCsw6qXNc?rel=0;&autoplay=1"));
objectList.push(objConstructor("DEVIL","Friend of the Devil","https://www.youtube.com/embed/UkjgYxs3gkw?rel=0;&autoplay=1"));
objectList.push(objConstructor("STRANGER","Feel Like a Stranger","https://www.youtube.com/embed/Cvi8P-pMHuA?rel=0;&autoplay=1"));
objectList.push(objConstructor("FRANCE","France","https://www.youtube.com/embed/yl-qNKQWK34?rel=0;&autoplay=1"));
objectList.push(objConstructor("MOUNTAIN","Fire on the Mountain","https://www.youtube.com/embed/0KJKiCGjHZk?rel=0;&autoplay=1"));
objectList.push(objConstructor("SHAKEDOWN","Shakedown Street","https://www.youtube.com/embed/6jmnASVqZMU?rel=0;&autoplay=1"));

//variable to hold words that have already been used
var usedWords = [];
//variables for randomly selected object and the specific word property
var computerChoice;
var computerWord;
//variables to hold player letter guesses, right, wrong, and verify alpha chars only
var rightGuess = [];
var correctString = "";
var userGuess;
var wrongGuesses = [];
var guessVerify;
//starting point variables for counters
var guessCount = 12;
var winCount = 0;
//variables to replace html spans, h2 content, and iframe
var winsText = document.getElementById("wins-text");
var currentWordText = document.getElementById("current-word");
var guessesLeftText = document.getElementById("guesses-left");
var lettersGuessedText = document.getElementById("letters-guessed");
var hiddenText = document.getElementById("hidden");
var musicUrl = document.getElementById("music");

//Functions
function resetGame() {
    randomNoRepeat(objectList);
    resetCurrentWord();
    currentWordText.textContent = correctString;
    wrongGuesses = [];
    lettersGuessedText.textContent = wrongGuesses;
    guessCount = 12;
    guessesLeftText.textContent = guessCount;
}

function resetCurrentWord() {
    rightGuesses = [];
    for (var i = 0; i < computerWord.length; i++) {
        rightGuesses.push('- ');
        correctString = rightGuesses.join("");
    }
}

function randomNoRepeat(arr) {
    if (arr.length === 0) {
        arr.splice(0, arr.length, ...usedWords);
        usedWords = [];
    }
    computerChoice = arr[Math.floor(Math.random() * arr.length)];
    computerWord = computerChoice.word;
    var index = arr.indexOf(computerChoice);
    arr.splice(index, 1);
    usedWords.push(computerChoice);
    console.log(objectList);
    console.log(usedWords);
}

function songMatch(obj) {
    if (document.getElementById("hidden").style.display = "hidden") {
        document.getElementById("hidden").style.display = "block";
    }
    if (musicUrl.style.display = "none") {
        musicUrl.style.display = "block";
    }
    document.getElementById("bandPic").style.display = "none";
    hiddenText.textContent = obj.songTitle;
    musicUrl.src = obj.songUrl;
}

function objConstructor(word, songTitle, songUrl) {
    return {
        word: word,
        songTitle: songTitle,
        songUrl: songUrl
    }
}

//initial page display info
guessesLeftText.textContent = guessCount;
randomNoRepeat(objectList);
resetCurrentWord();
currentWordText.textContent = correctString;

//Game itself
document.onkeyup = function (event) {

    // Determines which key was pressed.
    userGuess = event.key.toUpperCase();
    guessVerify = event.keyCode
    console.log(event);

    //checks to make sure key pressed was a alpha
    if (guessVerify > 64 && guessVerify < 91) {
        //if correct letter guessed find all instances of it and replace - with letter
        if (computerWord.indexOf(userGuess) !== -1) {
            for (var j = 0; j < computerWord.length; j++) {
                if (computerWord[j] == userGuess) {
                    rightGuesses[j] = computerWord[j];
                    correctString = rightGuesses.join("");
                    currentWordText.textContent = correctString;
                }
            }
        }
        //if wrong letter guessed and letter hasn't already been guessed
        else if ((computerWord.indexOf(userGuess) === -1) && (wrongGuesses.indexOf(userGuess) === -1)) {
            guessCount--;
            guessesLeftText.textContent = guessCount;
            wrongGuesses.push(userGuess);
            lettersGuessedText.textContent = wrongGuesses;
        }
        //checks win condition
        if (computerWord === correctString) {
            winCount++;
            winsText.textContent = winCount;
            songMatch(computerChoice);
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