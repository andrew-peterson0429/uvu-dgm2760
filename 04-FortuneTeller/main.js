document.querySelector('header > h1').innerHTML = "Fortune Teller";
document.querySelector('header > h2').innerHTML = "Switch Statments";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

let fate = getRandomInt(1,5)
let day = getRandomInt(1,30)

function getMonthName(month) {
    let name 
    switch (month) {
        case 1:
            name = "January"
            break;
        case 2:
            name = "February"
            break;
        case 3:
            name = "March"
            break;
        case 4:
            name = "April"
            break;
        case 5:
            name = "May"
            break;
        case 6:
            name = "June"
            break;
        case 7:
            name = "July"
            break;
        case 8:
            name = "August"
            break;
        case 9:
            name = "September"
            break;
        case 10:
            name = "October"
            break;
        case 11:
            name = "November"
            break;
        case 12:
            name = "December"
            break;
                
        default:
            name = "Not a month"
            break;
    }
return name
}

function getFortune(fate) {
    let message 
    switch (fate) {
        case 1:
            message = "find money. In the washing machine."
            break;
        case 2:
            message = "find love. In the form of a sandwhich."
            break;
        case 3:
            message = "have a dream vacation! As long as that dream is an Idaho potato field."
            break;
        case 4:
            message = "be able to buy a GPU. Just the GTX 1050 though."
            break;
        case 5:
            message = "recieve another stimulus check. But it is an IOU."
            break;

        default:
            message = "Some sort of error occured"
            break;
    }
return message
}

let month = getRandomInt(1,12)
const monthName = getMonthName(month)
const getFate = getFortune(fate)

const fortuneRevealed = `On ${monthName} ${day}, you will ${getFate}`

document.querySelector('#fortune').innerHTML = fortuneRevealed