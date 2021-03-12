document.querySelector('header > h1').innerHTML = "High Low Guessing Game";
document.querySelector('header > h2').innerHTML = "'A Game So Fun, You'll Play it Once!'";

// pick a random number between 0 and 16

let correctNumber = Math.floor(Math.random() * 15) 

let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1
ribbon = 0

console.log(`The correct number is ${correctNumber}`)

function evalGuess() {
    console.log("Thanks for clicking")
    totalGuesses++ // totalGuesses = totalGuesses + 1 if doesn't work, use += 1
    gamerGuess = document.querySelector('#guess').value

    const feedback = document.querySelector('#feedback')

    if (gamerGuess == correctNumber) {
        console.log(`gamerGuess is equal to correctNumber`)
        feedback.innerText = 'You win!'
        giveAward()
        //ribbon += 1
    } else if (gamerGuess > correctNumber && gamerGuess < 16){
        feedback.innerText = 'Too high, try again'
    } else if (gamerGuess < correctNumber && gamerGuess > 0){
        feedback.innerText = 'Too low, try again'
    } else {
        feedback.innerText = 'Please choose a number between 1 and 15 and try again'
        totalGuesses -= 1 //The totalGuess += 1 will be subtracted
    }

        document.querySelector('#attempts').innerText = totalGuesses
        //document.querySelector('#ribbon').innerText = ribbon
    
}

function giveAward() {
    console.log('Congratulations!')
    let imagePath = '#'
    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            imagePath = '/03-HighLowGuessingGame/images/blueRibbon.png'
            break;
        case 4:
        case 5:
        case 6:
            imagePath = '/03-HighLowGuessingGame/images/redRibbon.png'
            break;
        case 7:
        case 8:
        case 9:
            imagePath = '/03-HighLowGuessingGame/images/yellowRibbon.png'
            break;
        case 10:
            break;
    }

    const awardImage = document.createElement('img') // This creates a <img> element
    awardImage.setAttribute('src', imagePath)
    const ribbon = document.querySelector('#ribbon')

    ribbon.appendChild(awardImage) //awardImage is the child
// Only appendchild if the ribbon element does not have any child nodes yet
}