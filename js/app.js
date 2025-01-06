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
const tableCardCounterElement = document.querySelectorAll('.button-count')
const tableCardElement = document.querySelectorAll('.button')
const tableCardsElement = document.querySelector('.table-cards')
const proxyTestButtonElement = document.querySelector('.proxyTestButton')
const bodyElement = document.querySelector('body')
const proxyButtonOneElement = document.querySelector('.button-one')
const proxyButtonTwoElement = document.querySelector('.button-two')
// const proxyButtoneThreeElement = document.querySelector('.button-three')
const proxyButtonFourElement = document.querySelector('.button-four')
const selectButtons = document.querySelectorAll('.created-button')
const selectSection = document.querySelectorAll('.created-ul')
// const selectTopPanelElement = document.querySelectorAll('#topPanel')

let selectedButtonsForBoolCheck = [true,false];           //* Bool Check in Selected Cards
const MAX_SELECTIONS = 2;                       //* Book Check limitation
let gameRunningStatus = false











//TODO: Create Func randomWordSelection(), Arguments: countries, DO: Generate Random words from Array of words 
const randomWordSelection = (word) => {                             //! DO NOT DELETE -- RETURNS random Word from countries array
    let selectedWord = ''; 
    let i = Math.floor(Math.random()*word.length) 
    selectedWord = word[i]
    // console.log(typeof selectedWord, `${selectedWord} selected word`)   // Checking if it is string.
    return selectedWord;                                                // Returns String data
}

const insertCardsCountRefONLY = (element) => {                        //* FOR CHECKING AND REFERENCE - CAN DELETE AT END
    console.log(element)
    // return event;
}

const createNestedListElement = (element) => {                      //! DO NOT DELETE -- Nested in createNestedUnlistElement()
    for (let t = 0; t < 6 ; t++) {                      
        const listChildElement = document.createElement('li')
        listChildElement.innerHTML = "Nested List"
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
    SectionChildElement.classList.add('created-section-flex')
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
        // console.log(typeof countTotalNumCard, countTotalNumCard)
        let numOfCards = countTotalNumCard()
        let selectedWords = []                                               
        for(let i=0 ; i<numOfCards/2; i++){                                
            selectedWords[i] = randomWordSelection(countries);
        }
        // console.log(`LOOK HERE        ${typeof selectedWords} ${selectedWords} Selected 3rd Country: ${selectedWords[2]}`)       //Array is working as intended
        return selectedWords;
}

//TODO: Create Func cloneWordsOnTable, Arguments: insertRandCardtoArray DO: Add random words to dynamic array. Return Array with 2 same words.
const cloneWordsOnTable = (element) => {                            //! DO NOT DELETE -- Cloned Words to be placed on Table
    let selectedWord = element
    // console.log(selectedWord, "MARKER")
    // console.log(selectedWord[0], "MARKER1")
    // console.log(selectedWord[1], "MARKER2")
    // console.log(selectedWord[2], "MARKER3")
    let selectedWordsOnTable = []
    //  console.log(`                               FIRST FOR LOOP`)
    for (let i = 0 ; i < element.length ; i++){              
        selectedWordsOnTable[i] = element[i];
        // console.log(`                               ${arrCardsOnTable[i]} BELONGS TO FOR LOOP`)
    }
    //     console.log(`                                   Overview CHECK ${arrCardsOnTable[0]} `)
    //     console.log(`                                   Overview CHECK ${arrCardsOnTable[1]} `)
    //     console.log(`                                   Overview CHECK ${arrCardsOnTable[2]} `)
    // console.log(`                                                                                   `)
    // console.log(`NEW PUSH AND APPENDCHILD HERE`)
    for (let j = 0; j < element.length; j++) {
        selectedWordsOnTable.push(selectedWordsOnTable[j])
        // console.log(`${arrCardsOnTable[j]} BELONGS TO FOR PUSH LOOP`)
    }
        // console.log(`                                   Overview CHECK ${arrCardsOnTable[3]} `)
        // console.log(`                                   Overview CHECK ${arrCardsOnTable[4]} `)
        // console.log(`                                   Overview CHECK ${arrCardsOnTable[5]} `)
        // console.log(`                                   RECHECK Array 0 CHECK ${arrCardsOnTable[0]} `)
        // console.log(`                                   RECHECK Array 1 CHECK ${arrCardsOnTable[1]} `)
        // console.log(`                                   RECHECK Array 2 CHECK ${arrCardsOnTable[2]} `)
        // console.log(`                                   RECHECK Array 3 CHECK ${arrCardsOnTable[3]} `)
        // console.log(`                                   RECHECK Array 4 CHECK ${arrCardsOnTable[4]} `)
        // console.log(`                                   RECHECK Array 5 CHECK ${arrCardsOnTable[5]} `)
        // console.log(`                                                                                   `)
        // console.log(`Selected Cloned Words: ${selectedWordsOnTable}`)
    return selectedWordsOnTable;
}

//TODO: Create Func shuffleTableArrayPos, Arguement: cloneWordsOnTable() && countTotalNumCard(), DO: With the Array. Randomise position of the array. 
//* Used help from this link: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleTableArrayPos = (preShuffle) => {                      //! DO NOT DELETE -- Shuffles inserted words on the table
    
    // console.dir(`RandTableArrayPos Results:  ${preShuffle} with length ${preShuffle.length}`)
      let currentIndex = preShuffle.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [preShuffle[currentIndex], preShuffle[randomIndex]] = [
      preShuffle[randomIndex], preShuffle[currentIndex]];
  }
  let postShuffle = preShuffle
    // console.log(`This is post shuffle: ${preShuffle}`)
   return postShuffle;
}

//TODO: Create Func insertArrToHtml Argument: RandTableArrayPos() DO: Insert return of shuffleTableArrayPos() back to HTML
const insertArrToHtml = (element) => {                              //! DO NOTE DELETE -- Inserts words to the cards on the table
    //event is the Array Countries we Need
    //element is the querySelectAll
    const createdButtonElement = document.querySelectorAll('.created-button')
    // let preInsert = element
    // console.log(`PreInsertion: ${event} with length ${element.length}`)
    // console.log(`Element Value: ${createdButtonElement} with length ${createdButtonElement.length}`)
    // console.log(`Element Value: ${createdButtonElement} with [2]] ${createdButtonElement[2]}`)
    // console.dir(createdButtonElement)

    element.forEach((value,index) => {
        if (createdButtonElement[index]) {
            createdButtonElement[index].innerHTML = value
        }
    });
}

//TODO: Create Func userSelectWordsAddClass(), Argument: nill, DO: Highlight, Add class ".selected-button" to user clicked button. 
//set new class, tag new class, remove class route?
//*or target route? going both classlist and target route. Try forEach.

//     //TODO: Sub-code for below
//     const addingEventToElements = (elements,event,handler) => {
//         elements.forEach(element => {
//             element.addEventListener(event, handler)
//         })
//     }



//* TESTING BOOL CHECKER    -----STILL NOT WORKING!!!
const boolChecker = () => {
    // console.log (`WOOOOOO`)
    const selectedButtons = document.querySelectorAll('.selected-button')
    // console.log(selectedButtons)
    // let boolChecks = []     
    let boolResults = false
    selectedButtons.forEach(element => {
        element.addEventListener('click', function(){
            console.log(`Testing BoolChecks ${boolResults}`)
            console.log(`Selected two words: ${selectedButtons[0].textContent} and ${selectedButtons[1].textContent}}`)
            if(selectedButtons.length === 2){
                if(selectedButtons[0].innerHTML === selectedButtons[1].innerHTML){
                    boolResults = true
                    // console.log(`Testing BoolChecks if True ${boolResults}`)
                } else {
                    boolResults = false
                    // console.log(`Testing BoolChecks if False ${boolResults}`)
                }
            }
        })
    })
    console.dir(selectedButtons)
    console.log(`This is from boolChecker: ${boolResults}`)
    return boolResults
}




// //TODO: Create Func selectedButtons() DO: insert .selected-button to those that was clicked. Max 2.
const selectedButtons = () => {
   const selectButtons = document.querySelectorAll('.created-button');
    let selectedItems = [];
    selectButtons.forEach(button => {
        button.addEventListener('click', function() {
            // If selected, unselects it
            if (this.classList.contains('selected-button')) {
                this.classList.remove('selected-button');
                selectedItems = selectedItems.filter(item => item !== this);
                // console.log(`Check select buttons function toggle class`)
                return;
            }

            // post 2 selections, remove both
            if (selectedItems.length === 2) {
                // console.log(`before boolcheckerfunc`)
                // boolChecker();
                // console.log(`after boolcheckerfunc`)
                selectedItems[0].classList.remove('selected-button');
                selectedItems[1].classList.remove('selected-button');
                selectedItems.shift();
                selectedItems.shift();
                // console.log(`Check select buttons function max 2 class`)
                
            }
            // if(document.querySelectorAll('.selected-button').length === 2){
            //     console.log(`call boolChecker`)
            //     boolChecker();
            // }
            
            // console.log(button.textContent)
            // Add new selection
            this.classList.add('selected-button');
            selectedItems.push(this);
        });
    });
}




//! DUPLICATED CODE        ******************************
// const selectedButtons = () => {
//    const selectedButtons = document.querySelectorAll('.created-button');
//     let selectedItems = [];

//     selectedButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             // If already selected, remove selection
//             if (this.classList.contains('selected-button')) {
//                 this.classList.remove('selected-button');
//                 selectedItems = selectedItems.filter(item => item !== this);
//                 return;
//             }
            
//             // If already have 2 selections, remove the first one
//             if (selectedItems.length >= 2) {
//                 selectedItems[0].classList.remove('selected-button');
//                 selectedItems.shift();
//             }
            
//             // Add new selection
//             this.classList.add('selected-button');
//             selectedItems.push(this);
//         });
//     });

//     // return selectedItems;
// }
//! DUPLICATED CODE ABOVE       ******************************



        //TODO: Create func insertedSelectedClass() DO: Clear newly inserted class via selection

//TODO: Create Func boolCheckTwoWords(), Argument: userSelectTwoWords(), DO: Checks 2 arrays if they are true or false. RETURNS bool. 










// const boolMerge = () => {
// const boolCheckElement = document.querySelectorAll('.selected-button')
//     let selectedButtons = []
//         boolCheckElement.forEach(boolValue => {
//             boolValue.addEventListener('click', function(){
//                 selectedButtons.push(this.classList.textCentent)
//             })
//         })
//         console.log(selectedButtons)
//     return selectedButtons
// }



        //TODO: IF true -- removeSelectedCards class 
        //TODO: IF false -- userSelectTwoWords 
//TODO: Write Function to remove all Section Table




//!-------------------------------- CORE FUNCTIONS ABOVE THIS LINE ---------------------------------\\

//**************************************************************************************************\\
//***************************************** NEUTRAL ZONE *******************************************\\
//**************************************************************************************************\\

//!-------------------------------- CALL FUNCTIONS BELOW THIS LINE ---------------------------------\\

const cardsCreation = () => {
    createSectionElement()
}


const getCardsToTable = () =>{
    // countTotalNumCard()
    // insertRandCardtoArray(countTotalNumCard())
    let bridgeWordsToTable = cloneWordsOnTable(selectRandWords())
    insertArrToHtml(shuffleTableArrayPos(bridgeWordsToTable))
    selectedButtons();
    // boolCheckTwoWords(selectedButtonsForBoolCheck)
    // boolCheckTwoWords();
    
}



// selectedButtons();     //! <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// boolChecker();
// boolMergeCheck(selectedButtonsForBoolCheck);




//!-------------------------------- CALL FUNCTIONS ABOVE THIS LINE ---------------------------------\\

//**************************************************************************************************\\
//***************************************** NEUTRAL ZONE *******************************************\\
//**************************************************************************************************\\

//!------------------------------- EVENT LISTENERS  BELOW THIS LINE --------------------------------\\



proxyButtonTwoElement.addEventListener('click',cardsCreation)

proxyButtonFourElement.addEventListener('click',getCardsToTable)

// selectTopPanelElement.addEventListener('click',userSelectWordsAddClass)

// addingEventToElements(selectButton,'click',userSelectWordsAddClass)




//TODO: Write Function to remove all Section Table
// proxyTestButtonElement.addEventListener('click', addLiElement)

//*--------------- WORKING (OTHERS) MAYBE NOT KEEPING ---------------\\

// Get ul .length
// https://stackoverflow.com/questions/20040825/check-how-many-li-there-are-in-a-ul-with-javascript#:~:text=ios%20azure%20docker-,Check%20how%20many%20there%20are,in%20a%20with%20javascript&text=getElementById(%22ul_o%22).,length)%3B


// const bridgeRandomWordsAndInserTwoCards = randomWordSelection(countries);
// const testInsertTwoCardsFunction = insertTwoWords(bridgeRandomWordsAndInserTwoCards);
// randomWordSelection(countries);

// const test = (x) => {
//     console.log(`test ${x}`)
// }
// document.querySelector('#test-button').addEventListener('click', ()=> test(`testing`))
