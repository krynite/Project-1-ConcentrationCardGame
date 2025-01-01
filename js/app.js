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
  
const randomWordSelection = (word) => {
    let selectedWord = '';
    let i = Math.floor(Math.random()*word.length) 
    selectedWord = word[i]
    // console.log(typeof selectedWord, `${selectedWord} selected word`)   // Checking if it is string.
    return selectedWord;                                                // Returns String data
}

// const insertTwoWords = (word) => {      // Returns 2 cards in Array form
//     let twoCards = [word,word]  
//     console.log(twoCards)
//     return twoCards;
// }



//TODO: Write a Function to count on the table how may '.button' or '#button' AKA cards are there. 
//TODO: To be passed to a function with for loop to create how many times a 'li' is created.
//console.log(`${tableCardCounter.length}`) // use tableCardCounter.length as counter
//TODO: Function to add 'li'

const createNestedListElement = (element) => {      
    for (let t = 0; t < 6 ; t++) {               //* Creates New LI       
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


//*--------------- WORKING (KEEPING) ---------------\\

proxyTestButtonElement.addEventListener('click', createSectionElement)
insertOneCard(randomWordSelection(countries));





























//TODO: Write Function to remove all Section Table









// proxyTestButtonElement.addEventListener('click', addLiElement)
// proxyTestButtonElement.addEventListener('click', createSectionElement)



















//*--------------- WORKING (OTHERS) MAYBE NOT KEEPING ---------------\\

// Get ul .length
// https://stackoverflow.com/questions/20040825/check-how-many-li-there-are-in-a-ul-with-javascript#:~:text=ios%20azure%20docker-,Check%20how%20many%20there%20are,in%20a%20with%20javascript&text=getElementById(%22ul_o%22).,length)%3B


// const bridgeRandomWordsAndInserTwoCards = randomWordSelection(countries);
// const testInsertTwoCardsFunction = insertTwoWords(bridgeRandomWordsAndInserTwoCards);
// randomWordSelection(countries);

