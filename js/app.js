//* Declare DATASET here:
// Used ChatGPT to get all the Countries Name. Faster than typing one by one. 
const countries = 
["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", 
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", 
  "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
  "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", 
  "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", 
  "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", 
  "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", 
  "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See", 
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", 
  "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kosovo", "Kuwait", "Kyrgyzstan", 
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", 
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", 
  "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", 
  "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", 
  "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", 
  "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
  "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", 
  "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", 
  "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", 
  "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", 
  "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", 
  "Zambia", "Zimbabwe"];

//* Declare SELECTORS here:
// const tableCardCounterElement = document.querySelectorAll('.button-count')
const tableCardElement = document.querySelectorAll('.button')
const tableCardsElement = document.querySelector('.table-cards')
const proxyTestButtonElement = document.querySelector('.proxyTestButton')
const bodyElement = document.querySelector('body')
// const proxyButtonOneElement = document.querySelector('.button-one')
const proxyButtonTwoElement = document.querySelector('.button-two')
const proxyButtonFourElement = document.querySelector('.button-four')
const selectSection = document.querySelectorAll('.created-ul')
const selecedCreatedButtons = document.querySelectorAll('.selected-button')
// const selectTopPanelElement = document.querySelectorAll('#topPanel')

let selectedButtonsForBoolCheck = [true,false];           //* Bool Check in Selected Cards
const MAX_SELECTIONS = 2;                       //* Book Check limitation
let gameRunningStatus = false
let selectedItems = []
let globalSelectedItems = []
const resetButtonElement = document.querySelector('.button-five')
let boolCounter = 0;
// let timeElm = document.getElementById('timerClass');
let timer;
let timeLeft = 60
// let timer = setInterval(countDownTimer,1000)
let scoreBoardCounter = 0
let finalScore = 0












//TODO: Create Func randomWordSelection(), Arguments: countries, DO: Generate Random words from Array of words 
const randomWordSelection = (word) => {                             //! DO NOT DELETE -- RETURNS random Word from countries array
    let selectedWord = ''; 
    let i = Math.floor(Math.random()*word.length) 
    selectedWord = word[i]
    // console.log(typeof selectedWord, `${selectedWord} selected word`)   // Checking if it is string.
    return selectedWord;                                                // Returns String data
}

const createNestedListElement = (element) => {                      //! DO NOT DELETE -- Nested in createNestedUnlistElement()
    for (let t = 0; t < 6 ; t++) {                      
        const listChildElement = document.createElement('li')
        listChildElement.innerHTML = ""
        listChildElement.classList.add('created-li')
        listChildElement.classList.add('created-button')        
        element.appendChild(listChildElement)
        // console.log(t)
        }
}

//TODO: Function to add 'li'
const createNestedUnlistElement = (element) => {                    //! DO NOT DELETE -- Creates New CARDS
    const unlistedChildElement = document.createElement('ul')
    // unlistedChildElement.innerHTML = 'Nested UL'
    unlistedChildElement.classList.add('created-ul')
    element.appendChild(unlistedChildElement)
    createNestedListElement(unlistedChildElement)
}

const createSectionElement = () => {                                //! DO NOT DELETE -- Creates New Section add CLASS "created-section created-section-flex"
    const SectionChildElement = document.createElement('section')
    // SectionChildElement.innerHTML = "New Section"
    SectionChildElement.classList.add('created-section')
    bodyElement.appendChild(SectionChildElement)
    createNestedUnlistElement(SectionChildElement)
}


//TODO: Create Function countTotalNumCard(): Arguement: nil DO: Count the number of cards on the table.
const countTotalNumCard = () => {                                   //! DO NOT DELETE -- Counts Created Cards aka ".created-li" or ".created-button"
    let count = document.querySelectorAll('.created-li').length
    // console.log(typeof count, count)
    return count;
}

//TODO: Create Function insertRandCardtoArray, Arguement: countTotalNumCard(),  DO: Create an Array, fill with random Words from randomWordSelection(countries) 
const selectRandWords = () => {                                     //! DO NOT DELETE -- selects Random Words base on half No. of cards on the table.
        let numOfCards = countTotalNumCard()
        let selectedRandWords = []                                               
        for(let i=0 ; i<numOfCards/2; i++){                                
            selectedRandWords[i] = randomWordSelection(countries);
        }
        return selectedRandWords;
}

//TODO: Create Func cloneWordsOnTable, Arguments: insertRandCardtoArray DO: Add random words to dynamic array. Return Array with 2 same words.
const cloneWordsOnTable = (element) => {                            //! DO NOT DELETE -- Cloned Words to be placed on Table
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

//TODO: Create Func shuffleTableArrayPos, Arguement: cloneWordsOnTable() && countTotalNumCard(), DO: With the Array. Randomise position of the array. 
//* Used help from this link: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleTableArrayPos = (preShuffle) => {                      //! DO NOT DELETE -- Shuffles inserted words on the table
      let currentIndex = preShuffle.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [preShuffle[currentIndex], preShuffle[randomIndex]] = [preShuffle[randomIndex], preShuffle[currentIndex]];
  }
  let postShuffle = preShuffle
    // console.log(`This is post shuffle: ${preShuffle}`)
   return postShuffle;
}

//TODO: Create Func insertArrToHtml Argument: RandTableArrayPos() DO: Insert return of shuffleTableArrayPos() back to HTML
const insertArrToHtml = (element) => {                              //! DO NOTE DELETE -- Inserts words to the cards on the table
    const createdButtonElement = document.querySelectorAll('.created-button')
    element.forEach((value,index) => {
        if (createdButtonElement[index]) {
            createdButtonElement[index].innerHTML = value
        }
    });
}

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
    } else  { 
        boolResult = false
        console.log(`BoolChecker F: ${boolResult}`)
        return boolResult
    }
}


// https://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward
function countDownTimer() {

    if (timeLeft == -1) {
        clearTimeout(timer)
        console.log(`Ran out of time!`)
        // finalScore = 
        summaryDisplay();
        scoreBoardCounter = 0
        boolCounter = 0
        document.querySelector('.scoreClass').innerHTML = "Score: "  + scoreBoardCounter
    } else {
        document.querySelector('.timerClass').innerHTML = "Time Left: "+timeLeft+"s"
        timeLeft--
    }
    // console.log(`Countdown: ${timeLeft}`)
}

function scoreBoard() {
    let gameDifficulty = 1      
    
    
    // hidden cards more multiplier
    let gameRows = (document.querySelectorAll('.created-ul').length)*2      // score multipler base on no. of rows. 

    // if(document.querySelector('.diffSelector').classList.contains)


    scoreBoardCounter = boolCounter*gameRows*gameDifficulty
    document.querySelector('.scoreClass').innerHTML = "Score: " + scoreBoardCounter
    finalScore = scoreBoardCounter
}



// //TODO: Create Func selectedButtons() DO: insert .selected-button to those that was clicked. Max 2.

function getSelectedWords() {
    console.log(`Selected Items: ${selectedItems.textContent} and Type: ${typeof selectedItems.textContent}`)
    return selectedItems.map(item => item.textContent);
}

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
        selectedItems.shift()
        selectedItems.shift()
        // selectedItems = []
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

function initializeOps() {
    
    chooseDifficulty()
    let selectButtons = document.querySelectorAll('.created-button')
    selectButtons.forEach(button => {
        button.addEventListener('click', highlightSelectedWord);
    });
    console.log(`init `)
    // selectButtons.forEach(button => {
    //     button.addEventListener('click', countTableClear);
    // });
}

function invis(){
let hiddenButtons = document.querySelectorAll('.created-button')
        if(this.value === "hard"){
            console.log(`Test to see if HARD works`)
            hiddenButtons.forEach(button => {
            button.classList.add('hidden-text')
            })

        }
        if(this.value === "easy"){            
            console.log(`Test to see if EZ works`)
            hiddenButtons.forEach(button => {
                button.classList.remove('hidden-text')
            })
        }
}


//https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
function chooseDifficulty() {
    document.querySelector('.diiffSelector').addEventListener('click',invis)
    console.log(`Testing chooseDifficulty`)
}

        //TODO: Create func insertedSelectedClass() DO: Clear newly inserted class via selection

//TODO: Create Func boolCheck(), Argument: userSelectTwoWords(), DO: Checks 2 arrays if they are true or false. RETURNS bool. 

        //TODO: IF true -- removeSelectedCards class 
        //TODO: IF false -- userSelectTwoWords 
//TODO: Write Function to remove all Section Table


//!-------------------------------- CORE FUNCTIONS ABOVE THIS LINE ---------------------------------\\

//**************************************************************************************************\\
//***************************************** NEUTRAL ZONE *******************************************\\
//**************************************************************************************************\\

//!-------------------------------- CALL FUNCTIONS BELOW THIS LINE ---------------------------------\\

const cardsCreation = () => {
    chooseDifficulty()
    createSectionElement()
}



//* Adds user selected rows of cards, fills all card slot with randomized words.
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

const resetAll = () => {
    console.log(`Reset`)
    // boolCounter = 0
    // boolChecker()
    // clearTimeout(timer)
    document.querySelectorAll('.created-li').forEach(element => {
        element.remove();
    })
    document.querySelectorAll('.created-ul').forEach(element => {
        element.classList.remove('created-ul')
    })
    document.querySelectorAll('.created-section').forEach(element => {
    element.remove()
})
    document.querySelector('#display').setAttribute("style","font-size: 14px;")
    document.querySelector('#display').innerHTML = "To play, click for the number of rows you want, select the difficulty and start the game."
    timeLeft = 0  
    // clearTimeout(timer) 
    

    scoreBoardCounter = 0
    boolCounter = 0
    finalScore = 0
    countDownTimer()
    scoreBoard()
    boolChecker()
    chooseDifficulty()
    // finalScore =-1
}

function summaryDisplay(){
    console.log(`SummaryDisplay`)    
    console.log(`finalScore ${finalScore}`)
    document.querySelector('#display').setAttribute("style","font-size: 24px;")
    document.querySelector('#display').innerHTML = "Your Final Score is: " + finalScore
}

//!-------------------------------- CALL FUNCTIONS ABOVE THIS LINE ---------------------------------\\

//**************************************************************************************************\\
//***************************************** NEUTRAL ZONE *******************************************\\
//**************************************************************************************************\\

//!------------------------------- EVENT LISTENERS  BELOW THIS LINE --------------------------------\\



proxyButtonTwoElement.addEventListener('click',cardsCreation)       // SET ROWS OF CARDS

proxyButtonFourElement.addEventListener('click',function(){
    clearTimeout(timer)
    timeLeft = 30    //! TIMER HERE!!
    countDownTimer()
    timer = setInterval(countDownTimer,1000)
    chooseDifficulty()
})
proxyButtonFourElement.addEventListener('click',initializeTable)    // START GAME BUTTON

resetButtonElement.addEventListener('click', resetAll )             // RESET BUTTON




//TODO: Write Function to remove all Section Table
// proxyTestButtonElement.addEventListener('click', addLiElement)

// https://stackoverflow.com/questions/20040825/check-how-many-li-there-are-in-a-ul-with-javascript#:~:text=ios%20azure%20docker-,Check%20how%20many%20there%20are,in%20a%20with%20javascript&text=getElementById(%22ul_o%22).,length)%3B



