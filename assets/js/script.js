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
        img: "",
        answer: 'Genghis Khan'
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
let currentQuestion;

function startGame() {
    currentQuestion = 0;
    gameArea.innerHTML = ""; // Clear the game area
    generateQuestion(); // Call the function to generate a question
}

function generateQuestion() {

    gameArea.innerHTML = ""; // Clear the game area
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
        alert("Correct!"); // Alert the user that the answer is correct
        incrementCorrectAnswers(); // Call the function to increment correct answers
    }
    else {
        alert("Wrong! The correct answer is: " + correctAnswer); // Alert the user that the answer is wrong
        incrementWrongAnswers(); // Call the function to increment wrong answers
    }
    nextQuestion(); // Call the function to go to the next question
}

function nextQuestion() {
    
    currentQuestion++; // Increment the current question index
    if (currentQuestion < questions.length) {
        generateQuestion(); // Call the function to generate the next question
    } else {
        alert("Quiz Over!"); // Alert the user that the quiz is over
        gameArea.innerHTML = ""; // Clear the game area
    }
}

function displayImage() {
    
}

function incrementCorrectAnswers() {

}

function incrementWrongAnswers() {

}