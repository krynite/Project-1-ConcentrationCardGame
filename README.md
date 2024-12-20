# Concentration Word Card Game (description)

This is a word card game that is 2x6 to 20x6 displayed on screen.
Players are to match 2 of the cards with the same text to score points. 30-60 second timer is given to end the game.
Points per matched cards are determined by how fast the user matches.

## User Stories

As a user, I want to be able to input my player name to indicate who is playing.
As a user, I want to select the difficulty of the game by selecting from two dropdown box on the number of rows and refresh speed(Text Cards refresh within 1-5 seconds).
As a user, I want to see the display to explain how the game is played.
As a user, I want to wait see a countdown to start the game in the display.
As a user, I want to be able to see the cards flashed before me and I must be able to match 2 cards by clicking them.
As a user, I want to see the cards being randomly produced.
As a user, I want to see the highlights of the card that I have selected.
As a user, I want to see the card disappear after reaching the end of its time limit.
As a user, I want to see the output/log or words matched in the score board.
As a user, I want to see the total score after the time limit.
As a user, I want to be able to reset the game and not the name.
As a user, I want to score more points based on reaction time.

### Core -> MVP (Minimal VBiable Product) -> Check In

## Pseudo Code

### Event Listerners DOM

document.querySelector() for Typing name in input.
document.querySelector() for Clicks

### functions

RENDERS
renderCardTransition()
renderCountdownTimer()
renderPostCardSelection()

renderScoreBoard()
<code> use push or shift in scoreboard.

selectedCards()
<code> selects only 2 cards. returns to and it is parameter for boolCheck().

boolCheck()
<code> after 2 cards are selected. verify if they are the same.
parameters from selectedCards().
false - selected cards becomes unselected.
true - cards are removed from the table of cards and replaced with new random cards.

updateDisplay()
<code> updates the display that indicates 0, 1 , 2 cards selected.

randDuration() // to be returned to css
<code> generates random timer generation between 1-5 seconds.
returns random timer.

randTextSelector()
<code> randomly select words from a pool of selected words.

scoreboard(durationLeft, difficultyOrRowsSelected)
<code> push to scoreboard

Prioritze generate random cards x4
