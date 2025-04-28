const questions = [
    {
        question: "I Came, I Saw, I Conquered",
        choices: ["Julius Caesar", "Alexander the Great", "Napoleon Bonaparte", "Genghis Khan"],
        img: "assets/images/Julius Ceasar.jpg",
        answer: 'Julius Caesar'
    },

    {
        question: "I am the punishment of God",
        choices: ["Genghis Khan", "Alexander the Great", "Albert Einstein", "Julius Caesar"],
        img: "assets/images/GenghisKhan.jpg",
        answer: 'Genghis Khan'
    },

    {
        question: "I am the state",
        choices: ["Louis XIV", "Napoleon Bonaparte", "Josef Stalin", "Winston Churchill"],
        img: "assets/images/Louis.jpg",
        answer: 'Louis XIV'
    },

    {
        question: "I have not yet begun to fight",
        choices: ["George Washington", "John Paul Jones", "Alexander the Great", "Napoleon Bonaparte"],
        img: "assets/images/JohnPaul.jpg",
        answer: 'John Paul Jones'
    },

    {
        question: "I will return",
        choices: ["Napoleon Bonaparte", "Douglas MacArthur", "Julius Caesar", "Genghis Khan"],
        img: "assets/images/mcAurthur.jpg",
        answer: 'Douglas MacArthur'
    },

    {
        question: "Who dares wins",
        choices: ["Nelson Mandela", "David Stirling", "Pope Francis", "Julius Caesar"],
        img: "assets/images/DavidStirling.jpg",
        answer: 'David Stirling'
    }
];

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                startGame(); // Call the function to start the game
            } else {
                checkAnswer(e); // Call the function to check the answer
            }
        })
    }
});

const gameArea = document.querySelector(".game-area"); // Select the game area element
const correctScore = document.querySelector("#correct-score"); // Select the correct score element
const incorrectScore = document.querySelector("#incorrect-score"); // Select the incorrect score element
const startButton = document.querySelector("#start-button"); // Select the start button element
let currentQuestion;

function startGame() {
    currentQuestion = 0;
    gameArea.innerHTML = ""; // Clear the game area
    document.getElementById("alerts").innerText = ""; // Clear the alert text
    correctScore.innerText = 0; // Reset the correct score
    incorrectScore.innerText = 0; // Reset the incorrect score
    generateQuestion(); // Call the function to generate a question
    startButton.textContent = "Restart"; // Change the start button text to "Restart"
}

function generateQuestion() {

    gameArea.innerHTML = ""; // Clear the game area
    const randomQuestion = Math.floor(Math.random() * questions.length); // Generate a random question index
    currentQuestion = randomQuestion; // Set the current question index to the random question index
    let questionText = document.createElement("h3");
    questionText.setAttribute("id", "question"); // Set the ID for the question text
    questionText.innerHTML = questions[currentQuestion].question; // Set the question text
    gameArea.appendChild(questionText); // Append the question text to the game area

    let imgcontainer = document.createElement("div");
    imgcontainer.setAttribute("id", "img-container"); // Set the ID for the image container
    gameArea.appendChild(imgcontainer); // Append the container to the game area

    let questionImg = document.createElement("img");
    questionImg.setAttribute("src", questions[currentQuestion].img);
    questionImg.setAttribute("alt", "Question Image");
    questionImg.setAttribute("id", "question-img"); // Set the ID for the image element
    questionImg.setAttribute("class", "blur"); // Set the class for the image element
    imgcontainer.appendChild(questionImg); // Append the image to the container

    let choicesContainer = document.createElement("div");
    choicesContainer.setAttribute("id", "answers"); // Set the ID for the choices container
    choicesContainer.innerHTML = ""; // Clear the container
    
    for (let choice of questions[currentQuestion].choices) {
        let choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "answer-button"); // Set the class for the choice button
        choiceButton.innerHTML = choice; // Set the button text to the choice
        choiceButton.addEventListener("click", checkAnswer); // Add an event listener to the button
        choicesContainer.appendChild(choiceButton); // Append the button to the choices container
    };
    

    gameArea.appendChild(choicesContainer); // Append the choices container to the game area


}


function checkAnswer(e) {

    let clickedButton = e.currentTarget; // Get the clicked button
    let selectedAnswer = clickedButton.innerText; // Get the text of the clicked button
    let correctAnswer = questions[currentQuestion].answer; // Get the correct answer
    if (selectedAnswer === correctAnswer) {
        //alert("Correct!"); // Alert the user that the answer is correct
        incrementCorrectAnswers(); // Call the function to increment correct answers
        document.getElementById("alerts").innerText = "Correct!"; // Set the answer alert text to "Correct!"
        alerts.setAttribute("class", "green-text")
    }
    else {
        //alert("Wrong! The correct answer is: " + correctAnswer); // Alert the user that the answer is wrong
        incrementWrongAnswers(); // Call the function to increment wrong answers
        document.getElementById("alerts").innerText = "Wrong! The correct answer is: " + correctAnswer; // Set the answer alert text to "Wrong!"
        alerts.setAttribute("class", "red-text")
    }

    flashAlert(); // Call the function to flash the alert text
    

}

function flashAlert() {
    let alertText = document.getElementById("alerts"); // Get the alert text element
    alertText.classList.add("flash"); // Add the flash class to the alert text
    displayImage(); // Call the function to display the image
    setTimeout(function() {
        alertText.classList.remove("flash"); // Remove the flash class after 1 second
        alertText.innerText = ""; // Clear the alert text
        nextQuestion(); // Call the function to go to the next question
    }, 2000);
}



function nextQuestion() {
    
    questions.splice(currentQuestion, 1); // Remove the current question from the array
    if (questions.length > 0) {
        generateQuestion(); // Call the function to generate a new question
    } else {
        alert("Game Over!"); // Alert the user that the game is over
        startButton.textContent = "Start Game"; // Change the start button text to "Start"
        gameArea.innerHTML = ""; // Clear the game area
    }


}

function displayImage() {
   let displayImage = document.getElementById("question-img"); // Get the image element
   displayImage.setAttribute("class", ""); // Remove the blur class from the image element
}

function incrementCorrectAnswers() {
    
    let oldScore = parseInt(document.getElementById("correct-score").innerText); // Get the current score
    document.getElementById("correct-score").innerText = oldScore + 1; // Increment the score by 1

}

function incrementWrongAnswers() {

    let oldScore = parseInt(document.getElementById("incorrect-score").innerText); // Get the current score
    document.getElementById("incorrect-score").innerText = oldScore + 1; // Increment the score by 1

}