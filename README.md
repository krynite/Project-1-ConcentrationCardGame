# Project Concentration Word Card Game ++

This project is about the development of the Concentration Word Game that has varius difficulties to suite the users capability. This game allows the user to have multiple attempts to train their concentration.

Link: https://krynite.github.io/Project-1-ConcentrationCardGame/

## Description

1. Words are randomly generated and randomly placed at each cycle, this requires the user to take in information in their current state and act on matching the words.
2. The design of the game allows the user to engage in difficulty that they will otherwise not be comfortable in. Like in visual ques and visibility.
3. The game rewards the user with higher score capability via different means of difficulties.

## How to play

1. User will first read the basic game instruction in the display and familiaries with the GUI.
2. User are allowed different options of difficulty, namely through the number of rows that the user would like to attempt in and having the words be revealed or hidden from view.
3. After the selection of Rows (Row of Six Cards), and the selection of difficulty level. User need only to press the Start Button to start the game."
4. Once the match has been activated, users are to match the cards by clicking on them. two at a time (on higher difficulty, the cards are hidden and only revealed on user clicks).
5. Once the correct match has been made, the words will have to match the whole tables worth of cards to refresh the cards on the table.
6. With a given time of 30 seconds, the faster the matches, the more score is scored.
7. Once the 30 seconds are up, user will be shown their total score of the match.

Note: Only 2 cards can be selected/revealed at each time.

### Difficulty Variations:

1. Number of Rows: By selecting more rows, user will have to navigate more with more options to choose the card.
2. State of Cards (Hidden or Revealed): In the hidden state, cards are presented without words displayed for the user to open and reveal the card of user's choosing. Once revealed, the user can hide the card/s by selecting it again to reveal more cards, two at a time. Once user have selected two matching words, selecting a third card will match the first two selected cards.

## User Story

As a user, I want to click a button for a number of times to determing the number of rows for the game.
As a user, I want to select the difficulty of the game by selecting from one dropdown box on the difficulty.
As a user, I want to see the display to explain how the game is played.
As a user, I want to wait see a countdown to start the game in the display.
As a user, I want to be able to see the cards flashed before me and I must be able to match 2 cards by clicking them.
As a user, I want to see the cards being randomly produced.
As a user, I want to see the highlights of the card that I have selected.
As a user, I want to see the current and total score.
As a user, I want to see the summary of the total score at the end of the game
As a user, I want to be able to reset the selection at any point of the game.
As a user, I want to score more points based on the difficulty selected and the number or rows chosen.

### Front End of game:

![Front-End](https://imgur.com/a/1JFfdoE)

### Hidden Words

![Hidden Words](https://imgur.com/Gqoce6U)

### End of Match Summary

![FinalScore](https://imgur.com/a/1rV8oij)

## Noteable Functions used:

### Func highlightSelectedWord()

This function serves multiple purpose. The original design of this function was to simply highlight and unhighlight two cards. It does so by tagging a class="selected-button" to the user selected words once clicked/selected. In the completion of the initial design, it would seem that instead of running the function solely with the intention of highlighting the cards was inefficient. Functions such as boolChecker(), scoreBoard() were added inside to facilitate the "if" statments in this code. The "if" statments in this function only allows user selected words (two words) to be passed to the boolChecker to be checked if it is matched. At the same time, regardless of if it is a successful match, the "if" statements also removes the selection that the user had selected.

The scoreBoard() function added here is for the purpose of allowing the user to have immediate current score updates after every successful matched words.

function highlightSelectedWord() {
chooseDifficulty()
console.dir(this.innerHTML)
if (this.classList.contains('selected-button')) {
this.classList.remove('selected-button');
selectedItems = selectedItems.filter(item => item !== this);
console.log('Selected words:', getSelectedWords());
return;
}

    console.log(`Inbetween : ${selectedItems}`)
    if (selectedItems.length === 2){
        // globalSelectedItems = JSON.stringify(getSelectedWords())
        globalSelectedItems = getSelectedWords()
        // console.log(`Text " ${globalSelectedItems} Type: ${typeof globalSelectedItems}`)
        // console.log(`Text " ${globalSelectedItems[0]}`)
        // console.log(`Text " ${globalSelectedItems[1]}`)

        boolChecker()
        scoreBoard()
        selectedItems[0].classList.remove('selected-button')
        selectedItems[1].classList.remove('selected-button')
        // selectedItems.shift()
        // selectedItems.shift()
        selectedItems = []
    }
    this.classList.add('selected-button')
    selectedItems.push(this)
    // console.log(`before if`)
    // console.log(`Count card ${typeof countTotalNumCard()}${countTotalNumCard()} and passed ${typeof document.querySelectorAll('.bool-true').length} ${document.querySelectorAll('.bool-true').length}`)
    if(countTotalNumCard() == document.querySelectorAll('.bool-true').length){
        document.querySelectorAll('.bool-true').forEach(element => {
            element.classList.remove('bool-true')
            initializeTable()
        })
    }

}

### Func: boolChecker()

The purpose of this is to take in the two tagged ".selected-button" selected elements in the form of an array and checks if the 2 items in the array are matched. If they are matched, this function will tag the same HTML element with the class="bool-pass", to indicate that this two elements has been matched. CSS will utilize these newly tagged elements to construct a visual aide to indicate that it is matched.

Do note the boolCounter++, for every successful match, the boolCounter will count the number of matches for the use of tallying of scores. This will be reset in the resetAll() function should the user wishes to reset mid game.

function boolChecker() {
let boolResult = null
console.log(`Injected Words 0: ${globalSelectedItems[0]}`)
console.log(`Injected Words 1: ${globalSelectedItems[1]}`)
if(globalSelectedItems[0] == globalSelectedItems[1]) {
boolCounter++
console.log(`boolCounter: ${boolCounter}`)
boolResult = true
console.log(`BoolChecker T: ${boolResult}`)
console.log(boolResult)
selectedItems.forEach(item => item.classList.add('bool-true'));
return boolResult
} else {
boolResult = false
console.log(`BoolChecker F: ${boolResult}`)
return boolResult
}
}

### Func: getSelectedWords();

This function assist the highlightSelectedWord() in inputing the data in an new array via "map". This data is than passed to the boolChecker(), which checks the array to see if it matches.

function getSelectedWords() {
console.log(`Selected Items: ${selectedItems.textContent} and Type: ${typeof selectedItems.textContent}`)
return selectedItems.map(item => item.textContent);
}

### Func: scoreBoard()

This function is to tabulate the total score.
-- Normal Score = 2pts/match
-- Row Multuplier = 1 row is the multiplier of 1, 2 row is a multiplier of 2 of the normal scores.
-- Hidden Difficulty Multiplier = Multiplier of 5

EXAMPLE: 2 ROW, REVEALED DIFFICULTY(EASY) = 4pts/match
1 ROW, HIDDEN DIFFICULTY(HARD) = 10pts/match
2 ROW, HIDDEN DIFFICULTY(HARD) = 20pts/match

function scoreBoard() {
let gameDifficulty = 1

    if(document.querySelector('.diffSelector').selectedOptions[0].text === "Hard - Words are hidden."){
        gameDifficulty = 5
    }

    // hidden cards more multiplier
    let gameRows = (document.querySelectorAll('.created-ul').length)*2      // score multipler base on no. of rows.

    // if(document.querySelector('.diffSelector').classList.contains)

    scoreBoardCounter = boolCounter*gameRows*gameDifficulty
    document.querySelector('.scoreClass').innerHTML = "Score: " + scoreBoardCounter
    finalScore = scoreBoardCounter

}

### 2 level Initializing Func: initializeTable()

#### Top level initializing function (1st layer)

##### Func: initializeTable()

This function triggers the 2nd initializing function called initializeOps(). This was originally the only planned initializing function to run all the necessary function. However, after much errors where unintended functions will error out. A second level initializer to specifically do other functions was required. This functions generates random words from selectRandWords(), and than the words are than cloned using the cloneWordsOnTable() to itself, creating a single array with matching words. This new matching words are than passed to shuffleTableArrayPos() function to randomize the index of the arrays. The randomized array is than passed to insertArrToHtml(). insertArrToHtml() utilizes querySelectorAll to all newly ".created-button" and inserting (by means of "forEach") the randomized array from shuffleTableArrayPos() and passes it back to the HTML.

const initializeTable = () =>{

        let bridgeWordsToTable = cloneWordsOnTable(selectRandWords())
        insertArrToHtml(shuffleTableArrayPos(bridgeWordsToTable))
        // chooseDifficulty()
        initializeOps()
        document.querySelector('#display').setAttribute("style","font-size: 14px;")
        document.querySelector('#display').innerHTML = "To play, click for the number of rows you want, select the difficulty and start the game."
        // scoreBoard()
        chooseDifficulty()

}

1. Count number of cards on the table:

const countTotalNumCard = () => { //! DO NOT DELETE -- Counts Created Cards aka ".created-li" or ".created-button"
let count = document.querySelectorAll('.created-li').length
// console.log(typeof count, count)
return count;
}

2. Generate words, quatity is half of the cards on the table. This is to ensure that there is always a matching card.

const selectRandWords = () => { //! DO NOT DELETE -- selects Random Words base on half No. of cards on the table.
let numOfCards = countTotalNumCard()
let selectedRandWords = []  
 for(let i=0 ; i<numOfCards/2; i++){  
 selectedRandWords[i] = randomWordSelection(countries);
}
return selectedRandWords;
}

3. Clone the words to a new array. (EXAMPLE words = ['Hi','Bye','Hi','Bye'])

const cloneWordsOnTable = (element) => { //! DO NOT DELETE -- Cloned Words to be placed on Table
// let selectedWord = element
let selectedWordsOnTable = []
for (let i = 0 ; i < element.length ; i++){  
 selectedWordsOnTable[i] = element[i];
}
for (let j = 0; j < element.length; j++) {
selectedWordsOnTable.push(selectedWordsOnTable[j])
}
return selectedWordsOnTable;
}

4. Shuffles the cloned array in point 3 above.

const shuffleTableArrayPos = (preShuffle) => { //! DO NOT DELETE -- Shuffles inserted words on the table
let currentIndex = preShuffle.length;

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() \* currentIndex);
        currentIndex--;
        [preShuffle[currentIndex], preShuffle[randomIndex]] = [preShuffle[randomIndex], preShuffle[currentIndex]];
    }
    let postShuffle = preShuffle
    // console.log(`This is post shuffle: ${preShuffle}`)

return postShuffle;
}

5. Insert the newly randomized array with matching words back to the cards on the table.
   const insertArrToHtml = (element) => { //! DO NOTE DELETE -- Inserts words to the cards on the table
   const createdButtonElement = document.querySelectorAll('.created-button')
   element.forEach((value,index) => {
   if (createdButtonElement[index]) {
   createdButtonElement[index].innerHTML = value
   }  
    });
   }

### Code Flow Summary:

The general flow of the code are as follows:

1. Event listeners are tagged to the difficulty selectors, resets and start buttons.
   -- resetAll() --> Resets all values of the game so user can start again.
   -- initializeTable() --> Function that takes in all values selected by the user and runs the setup of the play.
   -- cardCreation() --> Function to generate cards base on users input.

2. From these listeners, they will reference to a function that a staging area. In this case it is
   -- cardsCreation() --> staging area for the card generator
   --- Creates new <section> >> <ul> >> <li> in the HTML.

   -- initializeTable() --> Staging area for the logic of the the game. Takes values of difficulty and sets up the the table
   --- (selectedRandWords(),shuffleTableArrayPos(),insertArrtoHtml()) --> Base on the cards selected by the user, 1/2 of the number of cards on the table is the number of words to be generated, generated words are further added to its own array to duplicate the words in the same array, this array of duplicate words is than passed to the shuffle function to shuffle the index of the array and therefore shuffling the words. The shuffled words are then reintroduced back to the HTML for the user to play.
   --- initializeOps() --> Initialize the highlighting,selection,selected words.Im this function, we will call the function boolChecker() to check the selected words and the scoreBoard() to tabulate the current scores. Highlighted/Selected words will be injected with a few class to tag the HTML element that they are in. CSS will than utilize these tags to hide the words and Javascript will further use these class tags to be used in the logic.
   --- chooseDifficulty() --> Takes in value of the selected difficulty and inputs to the score multiplier. It also alters the way the cards are created by ensuring the cards are created with hidden words.
   --- Sets up display message on how the user should play the game.

   -- resetAll() --> Resets the countdown timer, score values, removal of all created cards by the removal of <section><ul><li> in the HTML. Reset also insert CSS data and new HTML introduction of the game as the start of the game for the player to play again.

## Key Learnings

1. Using the method of inserting class tags to the clicked cards is the most flexible method. This allows the coder to dynamically change up/down the scale of the game. This method greatly improves the scalability and flexibility of the game by allowing simpler functions to be carried out.
2. Having a draft of how the program will look like first and what it does is vital in the successful deployment of the game.
3. A visual flow of the data and the functions by means of flowcharts etc, are very effective for visual learners like myself to have a bigger picture of where the game is headed, and the overview of the flow of data is a good way to determine if the methodolgy used is feasible to meet its intended goals. This also allows the coder to re-arranging the methods used to allow the game to be scalable and flexible for future enhancements or edits.
4. Naming scheme of functions base on what it does is vital. As wrong naming schemes can derail the thought process of the coder.
5. Structuring/Organizing Datasets, Logics, Resourses will assist greatly in decluttering the codes.

## Enhancements:

1. Rather than making the words invisible, remove the words completely so user cannot cheat by highlighting the area.
2. Add render animation between states.
3. Leaders board. A storage locale for top scorers. This will include storage of Player Name.
4. Penalty for multiple successful mismatches.
5. Quick matching - If the user is able to instantly match with a shorter timeframe, more points will be awarded.
