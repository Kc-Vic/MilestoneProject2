const questions = [
    {
        question: "I Came, I Saw, I Conquered",
        choices: ["Julius Caesar", "Alexander the Great", "Napoleon Bonaparte", "Genghis Khan"],
        img: "assets/images/caesar.jpg",
        answer: 0
    },

    {
        question: "I am the pinishment of God",
        choices: ["Genghis Khan", "Alexander the Great", "Albert Einstein", "Julius Caesar"],
        img: "",
        answer: 0
    }
];

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                startGame(); // Call the function to start the game
            } else {
                let gameType = this.getAttribute("id");
                alert(`You clicked ${gameType}`);
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

    let questionText = document.createElement("h3");
    questionText.setAttribute("id", "question"); // Set the ID for the question text
    questionText.innerHTML = questions[currentQuestion].question; // Set the question text
    gameArea.appendChild(questionText); // Append the question text to the game area

    displayImage(); // Call the function to display the image

    let choicesContainer = document.createElement("div");
    choicesContainer.setAttribute("id", "answers"); // Set the ID for the choices container
    choicesContainer.innerHTML = ""; // Clear the container
    
    for (let choice of questions[currentQuestion].choices) {
        let choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "answer-button"); // Set the class for the choice button
        choiceButton.innerHTML = choice; // Set the button text to the choice
        choicesContainer.appendChild(choiceButton); // Append the button to the choices container
    };

    gameArea.appendChild(choicesContainer); // Append the choices container to the game area

}

function checkAnswer() {

}

function displayImage() {

    let imgcontainer = document.createElement("div");
    imgcontainer.setAttribute("id", "img-container"); // Set the ID for the image container
    gameArea.appendChild(imgcontainer); // Append the container to the game area

    let questionImg = document.createElement("img");
    questionImg.setAttribute("src", questions[currentQuestion].img);
    questionImg.setAttribute("alt", "Question Image");
    questionImg.setAttribute("id", "question-img"); // Set the ID for the image element
    imgcontainer.appendChild(questionImg); // Append the image to the container
}

function incrementCorrectAnswers() {

}

function incrementWrongAnswers() {

}