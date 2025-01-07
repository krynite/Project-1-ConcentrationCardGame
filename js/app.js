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

// let selectedWordStringify = []; //May not be needed.











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

//TODO: Create Func userSelectWordsAddClass(), Argument: nill, DO: Highlight, Add class ".selected-button" to user clicked button. 
//set new class, tag new class, remove class route?
//*or target route? going both classlist and target route. Try forEach.

//     //TODO: Sub-code for below
//     const addingEventToElements = (elements,event,handler) => {
//         elements.forEach(element => {
//             element.addEventListener(event, handler)
//         })
//     }


const boolChecker = (element) => {
    let boolResult = false
    if(element[0] === element[1]) {
        boolResult = true
        console.log(boolResult)
        return boolResult
    }
    return boolResult
}





// let returnSelected = []
// //TODO: Create Func selectedButtons() DO: insert .selected-button to those that was clicked. Max 2.
// function selectTwoButtons() {
//     const selectedButtons = document.querySelectorAll('.created-button');

//     selectedButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             // If already selected, remove selection
//             if (this.classList.contains('selected-button')) {
//                 this.classList.remove('selected-button');
//                 selectedItems = selectedItems.filter(item => item !== this);
//                 console.log('Selected words:', getSelectedWords());
//                 return;
//             }
            
//             // If already have 2 selections, remove the first one
//             if (selectedItems.length >= 2) {
//                 selectedItems[0].classList.remove('selected-button');
//                 selectedItems[1].classList.remove('selected-button');
//                 selectedItems.shift();
//                 selectedItems.shift();
//             }
            
//             // Add new selection
//             this.classList.add('selected-button');
//             selectedItems.push(this);
            
//             // Log current selections
//             console.log('Selected words:', getSelectedWords());  //! << Cant get the data out of this. Trying to have a return on the functions electTwoButtons() so I can pass onto boolChecker()
//             selectedWordStringify = JSON.stringify(getSelectedWords())
//             // console.log(`This is Test : ${selectedWordStringify}`)
//             return selectedWordStringify
//         });
//     });
// }

const getSelectedWords =() => {
    return selectedItems.map(item => item.textContent);
}

function highlightSelectedWord() {
    console.dir(this.innerHTML)
    if (this.classList.contains('.selected-button')){
        this.classList.remove('.selected-button')
        selectedItems = selectedItems.filter(item => item !== this)
        return;
    }

    if (selectedItems.length >= 2){
        globalSelectedItems = JSON.stringify(getSelectedWords())
        console.log(`Text " ${globalSelectedItems}`)
        selectedItems[0].classList.remove('selected-button')
        selectedItems[1].classList.remove('selected-button')
        selectedItems.shift()
        selectedItems.shift()
    }
    
    this.classList.add('selected-button')
    selectedItems.push(this)
    
}

function initializeOps() {
    // Attach event listeners to buttons
    let selectButtons = document.querySelectorAll('.created-button')
    selectButtons.forEach(button => {
        button.addEventListener('click', highlightSelectedWord);
    });
}


//!---------------------------------------------------
// const selectedButtons = () => {

//     let selectedItems = [];


//     const selectButtons = document.querySelectorAll('.created-button');

//     const getSelectedWords = () =>{
//         returnSelected = selectedItems.map(item => item.textContent)
//         return selectedItems.map(item => item.textContent);
//     }

//                     selectButtons.forEach(button => {
//                                     button.addEventListener('click', function() {
//                                         // If selected, unselects it
//                                         if (this.classList.contains('selected-button')) {
//                                             this.classList.remove('selected-button');
//                                             selectedItems = selectedItems.filter(item => item !== this);
//                                             return;
//                                         }

//                                         // after 2 selections, remove both
//                                         if (selectedItems.length === 2) {
//                                             selectedItems[0].classList.remove('selected-button');
//                                             selectedItems[1].classList.remove('selected-button');
//                                             selectedItems.shift();
//                                             selectedItems.shift();
//                                         }

//                                         this.classList.add('selected-button');
//                                         selectedItems.push(this);
//                                         // getSelectedWords();

//                                         // console.log('Currently selected:', getSelectedWords());
//                                         // console.log(`Currently Selected: ${typeof getSelectedWords()} ${getSelectedWords()}`)
//                                         // console.log(`Currently Selected stringify: ${JSON.stringify(getSelectedWords())}`)
//                                         returnSelected = JSON.stringify(getSelectedWords())
//                                         console.log(`Returned Value: ${returnSelected}`)
//                                 })
//                 })
//     console.log(`Returnedasdasd Value: ${returnSelected}`)
// }
//!---------------------------------------------------


        //TODO: Create func insertedSelectedClass() DO: Clear newly inserted class via selection

//TODO: Create Func boolCheckTwoWords(), Argument: userSelectTwoWords(), DO: Checks 2 arrays if they are true or false. RETURNS bool. 

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



//* Adds user selected rows of cards, fills all card slot with randomized words.
const initializeTable = () =>{
        let bridgeWordsToTable = cloneWordsOnTable(selectRandWords())
        insertArrToHtml(shuffleTableArrayPos(bridgeWordsToTable))
        initializeOps()
        // console.log(`Func: OutSelected ITems: ${getSelectedWords}`)
        // console.log(getSelectedWords());
        // console.log(`This is Test : ${selectedWordStringify}`)
        // const getSelected = selectTwoButtons();
        // const selectedWords = getSelected();
        // boolChecker()
        // let arr = ('Singapore','Singapore')
        // boolChecker(arr)
}



//!-------------------------------- CALL FUNCTIONS ABOVE THIS LINE ---------------------------------\\

//**************************************************************************************************\\
//***************************************** NEUTRAL ZONE *******************************************\\
//**************************************************************************************************\\

//!------------------------------- EVENT LISTENERS  BELOW THIS LINE --------------------------------\\



proxyButtonTwoElement.addEventListener('click',cardsCreation)

proxyButtonFourElement.addEventListener('click',initializeTable)



//TODO: Write Function to remove all Section Table
// proxyTestButtonElement.addEventListener('click', addLiElement)

// https://stackoverflow.com/questions/20040825/check-how-many-li-there-are-in-a-ul-with-javascript#:~:text=ios%20azure%20docker-,Check%20how%20many%20there%20are,in%20a%20with%20javascript&text=getElementById(%22ul_o%22).,length)%3B



