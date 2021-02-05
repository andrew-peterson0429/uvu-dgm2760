
document.getElementById('company').innerHTML = "Ol' Countries Bed and Breakfast";

document.querySelector('header > h2').innerText = "The Bed and Breakfast Place";

let userName = prompt("What is your name?");

let message = `Hello ${userName}, welcome to the Bed and Breakfast Place.`

document.querySelector('#greeting').innerText = message;