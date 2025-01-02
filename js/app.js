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
const proxyButtoneThreeElement = document.querySelector('.button-three')
const proxyButtoneFourElement = document.querySelector('.button-four')
let arrCardsOnTable = []
  
const randomWordSelection = (word) => {             //* RETURNS random Word
    let selectedWord = '';
    let i = Math.floor(Math.random()*word.length) 
    selectedWord = word[i]
    // console.log(typeof selectedWord, `${selectedWord} selected word`)   // Checking if it is string.
    return selectedWord;                                                // Returns String data
}





//console.log(`${tableCardCounter.length}`) // use tableCardCounter.length as counter
//TODO: Function to add 'li'

const insertOneCard = (event) => {
    console.log(event)
    // return event;
}


const createNestedListElement = (element) => {                      //* Creates New LI
    for (let t = 0; t < 6 ; t++) {                      
        const listChildElement = document.createElement('li')
        listChildElement.innerHTML = "Nested List"
        listChildElement.classList.add('created-li')
        listChildElement.classList.add('created-button')        
        element.appendChild(listChildElement)
        console.log(t)
        }
}

const createNestedUnlistElement = (element) => {                    //* Creates New UL
    const unlistedChildElement = document.createElement('ul')
    // unlistedChildElement.innerHTML = 'Nested UL'
    unlistedChildElement.classList.add('created-ul')
    element.appendChild(unlistedChildElement)
    createNestedListElement(unlistedChildElement)
}


const createSectionElement = () => {                                //* Creates New Section
    const SectionChildElement = document.createElement('section')
    // SectionChildElement.innerHTML = "New Section"
    SectionChildElement.classList.add('created-section')
    SectionChildElement.classList.add('created-section-flex')
    bodyElement.appendChild(SectionChildElement)
    createNestedUnlistElement(SectionChildElement)
}


//TODO: Create Function countTotalNumCard(): Arguement: nil DO: Count the number of cards on the table.
const countTotalNumCard = () => {
    let count = document.querySelectorAll('.created-li').length
    // console.log(typeof count, count)
    return count;
}

//TODO: Create Function insertRandCardtoArray, Arguement: countTotalNumCard(),  DO: Create an Array, fill with random Words from randomWordSelection(countries) 
const insertRandCardtoArray = (countTotalNumCard) => {              //* Adds Random Words to arrCardsOnTable[]. NOTICE: 6 cards, 3 Words.
        // console.log(typeof countTotalNumCard, countTotalNumCard)
        let selectedWords = []                                               
        for(let i=0 ; i<countTotalNumCard/2; i++){                                
            selectedWords[i] = randomWordSelection(countries);
        }
        // console.log(`${typeof selectedWords} ${selectedWords} Selected 3rd Country: ${selectedWords[2]}`)       //Array is working as intended
        return selectedWords;
}

//TODO: Create Func randTableArray, Arguments: insertRandCardtoArray DO: Add random words to dynamic array. Return Array with 2 same words.
const randTableArray = (event) => {
    // console.log(event, "MARKER")
    // console.log(event[0], "MARKER1")
    // console.log(event[1], "MARKER2")
    // console.log(event[2], "MARKER3")

    //  console.log(`                               FIRST FOR LOOP`)
    for (let i = 0 ; i < event.length ; i++){              
        arrCardsOnTable[i] = event[i];
        // console.log(`                               ${arrCardsOnTable[i]} BELONGS TO FOR LOOP`)
    }
    //     console.log(`                                   Overview CHECK ${arrCardsOnTable[0]} `)
    //     console.log(`                                   Overview CHECK ${arrCardsOnTable[1]} `)
    //     console.log(`                                   Overview CHECK ${arrCardsOnTable[2]} `)
    // console.log(`                                                                                   `)
    // console.log(`NEW PUSH AND APPENDCHILD HERE`)
    for (let j = 0; j < event.length; j++) {
        arrCardsOnTable.push(arrCardsOnTable[j])
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
        // console.log(`Full Array Addressed: ${arrCardsOnTable}`)
    return arrCardsOnTable;
}


//TODO: Creat Func randTableArrayPos, Arguement: randTableArray() && countTotalNumCard(), DO: With the Array. Randomise position of the array. 
const randTableArrayPos = (preRandPos) => {         //? INCOMPLETE
    let postRandPos = []
    console.log(`RandTableArrayPos Results:  ${preRandPos}`)
   return postRandPos;
}


//TODO: Create Func ???, Argument: RandTableArrayPos() DO: Insert return of RandTableArrayPos() back to HTML




const getCardsToTable = () =>{
    // countTotalNumCard()
    // insertRandCardtoArray(countTotalNumCard())
    // randTableArray(insertRandCardtoArray(countTotalNumCard()))
    let proxToTablePos = randTableArray(insertRandCardtoArray(countTotalNumCard()))
    // console.log (`SHOW PROXY`)
    // console.log(`PROXY RESULTS:             ${proxToTablePos}`)
    randTableArrayPos(proxToTablePos)
    // randTableArrayPos()
}

//*--------------- WORKING (KEEPING) ---------------\\

// proxyTestButtonElement.addEventListener('click', createSectionElement)
// insertOneCard(randomWordSelection(countries));
// proxyButtonOneElement.addEventListener('click',insertOneCard(randomWordSelection(countries)))
proxyButtonTwoElement.addEventListener('click',createSectionElement)
// proxyButtoneThreeElement.addEventListener('click',countTotalNumCard)
// proxyButtoneFourElement.addEventListener('click',(e)=>insertRandCardtoArray(countTotalNumCard()))
proxyButtoneFourElement.addEventListener('click',getCardsToTable)

























//TODO: Write Function to remove all Section Table









// proxyTestButtonElement.addEventListener('click', addLiElement)
// proxyTestButtonElement.addEventListener('click', createSectionElement)



















//*--------------- WORKING (OTHERS) MAYBE NOT KEEPING ---------------\\

// Get ul .length
// https://stackoverflow.com/questions/20040825/check-how-many-li-there-are-in-a-ul-with-javascript#:~:text=ios%20azure%20docker-,Check%20how%20many%20there%20are,in%20a%20with%20javascript&text=getElementById(%22ul_o%22).,length)%3B


// const bridgeRandomWordsAndInserTwoCards = randomWordSelection(countries);
// const testInsertTwoCardsFunction = insertTwoWords(bridgeRandomWordsAndInserTwoCards);
// randomWordSelection(countries);

