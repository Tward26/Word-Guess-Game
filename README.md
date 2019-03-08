# Word-Guess-Game

*Hangman type game created for bootcamp coursework*

## Purpose:
The purpose of this basic game was to practice my javascript skills while also providing a fun way of exposing the end user to the music of
the Grateful Dead.

## How it works:
This is accomplished by a simple word guess hangman type game where the user is given one of 11 possible words that they have to guess letter by letter. Some basic input validation is preformed to make sure only alphabetical characters are permitted. For each new word a player is allowed 12 incorrect guesses before the game is reset with a new word. Once a word has been guessed correctly or the user has run out of guesses, the word is removed from the rotation until all 11 words have been iterated through. Upon correctly guessing a word the image on the left changes to a video of the song, the name of the song appears above the game area, and the song autoplays. A counter keeps track of how many word have been guessed correctly with a win count.

A constructor function was created for adding word objects to the array of possible word choices so more words/songs could be easily added.

## How to use:
To start playing the user simply has to push an alpha character and it will either input the letter into the correct space or add it to the list of letters already guessed at the bottom.

## Contributors:
This project is maintained and contributed to solely by myself, Tyler Ward. Songs were linked from youtube and are licensed to their respective owners.
