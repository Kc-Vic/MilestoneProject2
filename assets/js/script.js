const originalQuestions = [
    {
        question: '"I Came, I Saw, I Conquered"',
        choices: ["Julius Caesar", "Alexander the Great", "Napoleon Bonaparte", "Genghis Khan"],
        img: "assets/images/Julius Ceasar.jpg",
        answer: 'Julius Caesar'
    },

    {
        question: '"I am the punishment of God"',
        choices: ["Genghis Khan", "Alexander the Great", "Albert Einstein", "Julius Caesar"],
        img: "assets/images/GenghisKhan.jpg",
        answer: 'Genghis Khan'
    },

    {
        question: '"One death is a tragedy; a million deaths is a statistic"',
        choices: ["Louis XIV", "Napoleon Bonaparte", "Joesef Stalin", "Winston Churchill"],
        img: "assets/images/Stalin.jpeg",
        answer: 'Joesef Stalin'
    },

    {
        question: '"Give a girl the right shoes, and she can conquer the world"',
        choices: ["Coco Chanel", "Marilyn Monroe", "Audrey Hepburn", "Kate Moss"],
        img: "assets/images/Marilyn.jpg",
        answer: 'Marilyn Monroe'
    },

    {
        question: '"I will return"',
        choices: ["Napoleon Bonaparte", "Douglas MacArthur", "Julius Caesar", "Genghis Khan"],
        img: "assets/images/mcAurthur.jpg",
        answer: 'Douglas MacArthur'
    },

    {
        question: '"Who dares wins"',
        choices: ["Nelson Mandela", "David Stirling", "Pope Francis", "Julius Caesar"],
        img: "assets/images/DavidStirling.jpg",
        answer: 'David Stirling'
    },

    {
        question: '"People have got to know wether or not their president is a crook"',
        choices: ["Barrack Obama", "Winston Churchill", "Donald Trump", "Richard Nixon"],
        img: "assets/images/Nixon.jpg",
        answer: 'Richard Nixon'
    },

    {
        question: '"I have a dream, that one day this nation will rise up"',
        choices: ["Martin Luther King Jr.", "Nelson Mandela", "Winston Churchill", "Albert Einstein"],
        img: "assets/images/MartinLutherKing.jpg",
        answer: 'Martin Luther King Jr.'
    },

    {
        question: '"I am the master of my fate"',
        choices: ["Nelson Mandela", "Winston Churchill", "William Ernest Henley", "Albert Einstein"],
        img: "assets/images/WilliamHenley.jpeg",
        answer: 'William Ernest Henley'
    },

    {
        question: '"Roll up that map of Europe, it will not be wanted these 10 years"',
        choices: ["Winston Churchill", "Albert Einstein", "William Pitt", "Von Birsmarck"],
        img: "assets/images/WilliamPitt.jpeg",
        answer: 'William Pitt'
    },

    {
        question: '"History is a set of lies agreed upon"',
        choices: ["Napoleon Bonaparte", "Albert Einstein", "Winston Churchill", "Richard Nixon"],
        img: "assets/images/Napoleon.jpeg",
        answer: 'Napoleon Bonaparte'
    },

    {
        question: '"If you want something said, ask a man; if you want something done, ask a woman"',
        choices: ["Margaret Thatcher", "Marie Curie", "Albert Einstein", "Winston Churchill"],
        img: "assets/images/MargaretThatcher.jpeg",
        answer: 'Margaret Thatcher'
    },

    {
        question: '"You do not need a crown to be a queen — just confidence."',
        choices: ["Victoria Beckham", "Rihanna", "Beyoncé", "Diana Ross"],
        img: "assets/images/VictoriaBeckham.jpeg",
        answer: "Victoria Beckham"
    },

    {
        question: '"I am inevitable"',
        choices: ["Hannibal Barca", "Napoleon Bonaparte", "Thanos", "Alexander the Great"],
        img: "assets/images/Thanos.jpeg",
        answer: 'Thanos'
    },

    {
        question: '"Fool of a Took!"',
        choices: ["Gandalf", "Frodo Baggins", "Samwise Gamgee", "Aragorn"],
        img: "assets/images/Gandalf.jpeg",
        answer: 'Gandalf'
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
let questions = [...originalQuestions]; // Create a copy of the original questions array
let currentQuestion;

/**
 * Starts the game by resetting the game area, scores, and generating a question.
 */
function startGame() {
    currentQuestion = 0;
    questions = JSON.parse(JSON.stringify(originalQuestions)); // Reset the questions array to the original questions
    gameArea.innerHTML = ""; // Clear the game area
    document.getElementById("alerts").innerText = ""; // Clear the alert text
    correctScore.innerText = 0; // Reset the correct score
    incorrectScore.innerText = 0; // Reset the incorrect score
    generateQuestion(); // Call the function to generate a question
    startButton.textContent = "Restart"; // Change the start button text to "Restart"
    focusGameArea();
}

function focusGameArea() {
    gameArea.scrollIntoView({ behavior: "smooth" }); // Scroll to the game area smoothly
}

/**
 * Generates a random question from the questions array and displays it in the game area.
 */
function generateQuestion() {

    gameArea.innerHTML = "";
    const randomQuestion = Math.floor(Math.random() * questions.length); // Generate a random question index
    currentQuestion = randomQuestion;

    let questionText = document.createElement("h3");
    questionText.setAttribute("id", "question");
    questionText.innerHTML = questions[currentQuestion].question; // Set the question text
    gameArea.appendChild(questionText); // Append the question text to the game area

    let imgcontainer = document.createElement("div");
    imgcontainer.setAttribute("id", "img-container");
    gameArea.appendChild(imgcontainer); // Append the container to the game area

    let questionImg = document.createElement("img");
    questionImg.setAttribute("src", questions[currentQuestion].img);
    questionImg.setAttribute("alt", "Question Image");
    questionImg.setAttribute("id", "question-img");
    questionImg.setAttribute("class", "blur");
    imgcontainer.appendChild(questionImg);

    let choicesContainer = document.createElement("div");
    choicesContainer.setAttribute("id", "answers");
    choicesContainer.innerHTML = ""; // Clear the container
    
    for (let choice of questions[currentQuestion].choices) {
        let choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "answer-button");
        choiceButton.setAttribute("id", "choice-button");
        choiceButton.innerHTML = choice;
        choiceButton.addEventListener("click", checkAnswer); // Add an event listener to the button
        choicesContainer.appendChild(choiceButton); // Append the button to the choices container
    };
    

    gameArea.appendChild(choicesContainer); // Append the choices container to the game area


}

/**
    * Checks the answer selected by the user and compares it with the correct answer.
 */
function checkAnswer(e) {

    let clickedButton = e.currentTarget; // Get the clicked button
    let selectedAnswer = clickedButton.innerText;
    let correctAnswer = questions[currentQuestion].answer; // Get the correct answer for the current question
    if (selectedAnswer === correctAnswer) {
        //alert("Correct!"); // Alert the user that the answer is correct
        incrementCorrectAnswers(); 
        document.getElementById("alerts").innerText = "Correct!"; 
        alerts.setAttribute("class", "green-text")
    }
    else {
        //alert("Wrong! The correct answer is: " + correctAnswer); // Alert the user that the answer is wrong
        incrementWrongAnswers(); 
        document.getElementById("alerts").innerText = "Wrong! The correct answer is: " + correctAnswer; // Set the answer alert text to "Wrong!"
        alerts.setAttribute("class", "red-text")
    }

    flashAlert(); 
    

}

/**
 * Disables all the buttons in the game area to prevent further clicks.
 * This is used when the user selects an answer to prevent them from clicking again until the next question is generated.
 */
function disableButtons() {

    let disableButtons = document.getElementsByClassName("answer-button"); // Get all the buttons with the ID "choice-button"
    for (let button of disableButtons) {
        button.setAttribute("disabled", "true"); // Disable the button
    }

}

function enableButtons() {
    let enableButtons = document.getElementsByClassName("answer-button"); 
    for (let button of enableButtons) {
        button.removeAttribute("disabled");
    }
}

/**
 * Flashes the alert text and displays the image.
 * This is used to indicate to the user that their answer was correct or wrong.
 */
function flashAlert() {
    let alertText = document.getElementById("alerts");
    alertText.classList.add("flash");
    displayImage();
    disableButtons();
    /** Sets timer between displaying image and next question*/
    setTimeout(function() { 
        alertText.classList.remove("flash"); 
        alertText.innerText = ""; 
        nextQuestion();
    }, 2000);
}


/**
 * Moves to the next question in the game.
 * This function is called when the user selects an answer and the alert text is flashed.
 */
function nextQuestion() {
    
    enableButtons();
    questions.splice(currentQuestion, 1); // Remove the current question from the array
    if (questions.length > 0) {
        generateQuestion();
    } else {
        endGame();
    }


}

/**
 * Displays the image associated with the current question by removing the blur class.
 */
function displayImage() {
   let displayImage = document.getElementById("question-img");
   displayImage.setAttribute("class", "");
}

/**
 * Increases the score by 1 everytime the user answers a questions after checking the answer.
 */
function incrementCorrectAnswers() {
    
    let oldScore = parseInt(document.getElementById("correct-score").innerText); // Get the current score
    document.getElementById("correct-score").innerText = oldScore + 1; // Increment the score by 1

}

function incrementWrongAnswers() {

    let oldScore = parseInt(document.getElementById("incorrect-score").innerText); // Get the current score
    document.getElementById("incorrect-score").innerText = oldScore + 1; // Increment the score by 1

}


function endGame() {
    //Alert the user that the game is over and displays total score using sweet alert code
    Swal.fire({
        title: "Game Over!",
        html: `
        You got <strong>${correctScore.innerText}</strong> correct answers and <strong>${incorrectScore.innerText}</strong> incorrect answers.`
      })
    startButton.textContent = "Start Game";
    gameArea.innerHTML = "";
    document.getElementById("alerts").innerText = ""; 

}

