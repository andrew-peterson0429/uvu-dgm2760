
const question = {
    stem: "Who is buried in Grant's Tomb?",
    option1: "Tom",
    option2: "Grant",
    option3: "Thor",
    option4: "Andrew",
    correct: 2,
    display: () => {
        document.getElementById('answer1').innerHTML = question.option1
        document.getElementById('answer2').innerHTML = question.option2
        document.getElementById('answer3').innerHTML = question.option3
        document.getElementById('answer4').innerHTML = question.option4
        document.querySelector('#stem').textContent = question.stem
        // Display the question options here
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "You are correct!"
        } 
        else {
            document.querySelector(".feedback").textContent = "Try again"
        }
    },
  
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

question.display()


// elseif (userChoice != question.correct) {
        //     document.querySelector(".feedback").textContent = "Try again"
        // }