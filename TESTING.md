# Testing
## Validators
The following validators were used to check the CSS and HTML code
1. [W3C CSS Validation](https://jigsaw.w3.org/css-validator/)
2. [W3C Markup Validation](https://validator.w3.org/)
## Functionality
The following aspects of the application have been checked to verify they work as intended. 
1. Game Setup
    * The game loads with the appropriate structure 
    * The instructions and title for the game display at the top of the page.
    * The different sections load appropriately. 
2. Start Game
    * The button to start the game loads up the questions from the array 
    * The multiple choice answers are shown at the start of the game 
    * The images associated with each question are loaded up in the game.
    * The start button changes to a restart button incase the user wants to start the game over.
3. Check Answer
    * When the user selects an answer it is checked to confirm if it is correct or incorrect
    * An alert pops up telling the user if their choice is correct or not. For an incorrect answer, the user gets the correct answer. 
    * The image blur is removed and displays clearly showing the image associated with the quote.
4. Calculate Score
    * The scores are updated every time the user answers a question
    * The total score is calculated and displayed to the user at the end of the round.  
5. Generate question
    * Random questions are generatded every time the user answers a question
    * The questions are not repeated within each round
    * There is a 2 seconds timer between when each question is generated. 
6. End Game
    * Pop up alert displays at the end of the game telling the user the game is over.
    * The game and score area clears for the next round to begin. 
    * The game does not reset as the question array is not populated at the end of the game. The user can refresh the game to start another round. 
## Browser Compatibility
    The website works on differenet browsers: Chrome, Firefox and Edge.
## Responsiveness
    The application works on different screen sizes ranging from Iphone 5 to Larger desktop screen sizes. 
## Client Stories
1. As a player I want to see the rules for the trivia game
    * The first thing a palyer sees when the page loads are the lists of guidelines for the game.
    * The guidelines tells the player how many questions they need to answer and how the points are scored.
    * This is all hardcoded in the HTML markup and will always appear whnever the user refreshes the page. 
2. As a player I want to know if I've chosen the correct answer
    * The player sgets an alert informing them if they have answered correctly.
    * If the chosen answer is incorrect, the correct answer is displayed in the alert.
    * Every time an answer is chosen, the image of the individual associated with the quote is displayed by removing the blur. 
3. As a player I want to see my score at the end of the game
    * The score tally is displayed at the bottom of the page everytime the answers a question.
    * The score summary is displayed as an alert at the end of the game informing the user how many questions they answered correctly and incorrectly. 
4. As a player I want to answer questions in the game
    * The player gets 15 questions generated in a random order from a question array. 
    * Each question contains 4 options which the user can choose from, only one of which is correct.
    * The questions do not repeat themselves after each round as they are removed from the array after the player chooses an answer.
## Manual Buttons Test
1. Buttons hoover
    * Move cursor over each button to verify button transition colour.
2. Button click
    * Click start button and option buttons to confirm all actions associated with event are triggered.
3. Start button text
    * Click start button to confirm inner text changes to restart when the game begins
4. Disable and Enable Buttons
    * Verify buttons are temporarily disabled when user choses an answer.
    * Verify all buttons are enabled when next question is generated. 

## Bugs Discovered
### Image display issues
* The images associated with each question needed to be hidden until each question is answered and would need to be removed when the user selects an option.
* To solve this issue I created a div class with blur filter which to the Image element which is removed when the user selects an option.

### Question Generator
* The list of questions for each round need to be generated randomly and ensure they are not being repeated. 
* This problem was solved by using a random function as well as a splice to remove a generated question from the array list.

### Time lapse between functions
* Due to the fact that 3 seperate functions are tied to the event listener for the buttons clicking, the function to display the image does not have enoiugh time to load before the next question is gerenarted. There is also the risk of the user clicking on the buttons several times before the next question loads.
* Thes issues have been resolved by the following actions
  1. I have added a delay timer of 2 seconds between when the image is displayed and the alerts and next question is generated. 
  2. I have also created 2 functions to disable the buttons when an answer is selectyed and enable the buttons when the next question is generated. 

