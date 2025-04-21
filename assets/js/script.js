document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("Game started!");
            } else {
                let gameType = this.getAttribute("id");
                alert(`You clicked ${gameType}`);
            }
        })
    }
});

function startGame() {

}

function generateQuestion() {

}

function checkAnswer() {

}

function displayImage() {

}

function incrementCorrectAnswers() {

}

function incrementWrongAnswers() {

}