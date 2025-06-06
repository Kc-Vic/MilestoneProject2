# Says Who - Trivia Game
[Visit deployed site here](https://kc-vic.github.io/MilestoneProject2/)

[Tests](TESTING.md)
## Overview

"Says Who" is an interactive web-based quiz game that challenges players to guess the authors of famous quotes. Players are presented with a quote and four possible authors to choose from. For each correct answer, players earn a point, and their score is tracked throughout the game. The game features a blurred image of the author that is revealed once an answer is selected, adding a visual element to the gameplay.

## Features

### Existing Features

- **Interactive Quiz Format**: Players are presented with quotes and must select the correct author from four options.
- **Image Reveal**: Each question includes a blurred image of the author that is revealed after the player makes a selection.
- **Score Tracking**: The game keeps track of both correct and incorrect answers.
- **Responsive Design**: The game is fully responsive and works well on devices of all sizes.
- **Feedback System**: Players receive immediate feedback on whether their answer was correct.
- **End Game Summary**: After completing all questions, players see a summary of their performance.
- **Restart Option**: Players can restart the game at any time.

### Game Rules

1. Guess the author of the displayed quote.
2. Select one of the four provided options.
3. Earn 1 point for each correct answer.
4. See your score tally after each question.
5. The game ends after answering all 15 questions.
6. Play as many times as you want by clicking the restart button.

## Technologies Used

- **HTML5**: For structuring the content of the game.
- **CSS3**: For styling the game interface and implementing responsive design.
- **JavaScript**: For game logic and interactivity.
- **Font Awesome**: For icons.
- **Google Fonts**: For typography.
- **SweetAlert2**: For enhanced alert popups.

## Wireframe Mockup
  * [Desktop view](wireframes/desktopWireframe.jpg)
  * [Tablet view](wireframes/tabletWireframe.jpg)
  * [Mobile view](wireframes/phoneWireframe.jpg)

## Deployment

### GitHub Pages Deployment

The live site is deployed using GitHub Pages. Here's how to deploy this project to GitHub Pages:

1. Log in to your GitHub account.
2. Navigate to the repository for this project.
3. Click on the "Settings" tab.
4. Scroll down to the "GitHub Pages" section.
5. Under "Source", select "main" (or "master") branch.
6. Click "Save".
7. The page will refresh, and a link to your deployed site will be displayed at the top of the GitHub Pages section.

The live link can be found here: [Says Who](https://kc-vic.github.io/MilestoneProject2/)

### Local Development 

#### How to Commit and Push Changes

To commit and push changes from your local filesystem to GitHub:

1. Open a terminal/command prompt and navigate to your project directory.
2. Track changes using Git:
   ```
   git add .
   ```
3. Commit the changes with a descriptive message:
   ```
   git commit -m "Describe the changes you made"
   ```
4. Push the changes to your GitHub repository:
   ```
   git push origin main
   ```

GitHub Pages will automatically update your deployed site with these changes, usually within a few minutes.

#### How to Clone and Run Locally

To clone this repository and run it locally:

1. Navigate to the main page of the repository on GitHub.
2. Click on the "Code" button.
3. Copy the URL provided.
4. Open a terminal/command prompt.
5. Change the current working directory to the location where you want the cloned directory.
6. Type `git clone` and paste the URL you copied:
   ```
   git clone https://github.com/Kc-Vic/MilestoneProject2.git
   ```
7. Press Enter to create your local clone.
8. Navigate into the cloned directory
9. Open the `index.html` file in your web browser to run the game locally.



## Future Improvements

- Add difficulty levels (easy, medium, hard)
- Include a timer for each question
- Add sound effects for correct/incorrect answers
- Implement a high score leaderboard
- Add more quotes and categories

## Credits

### Content
- All quotes were sourced from [Famous Quotes](https://www.brainyquote.com/) and [QuoteGarden](https://quotegarden.com/)

### Media
- All images were sourced from [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/)

### Code
- SweetAlert2 library for enhanced popups [SweetAlert2](https://sweetalert2.github.io/)
- The shuffle algorithm was inspired by [Glitch quiz-example-bla-bla](https://glitch.com/edit/#!/quiz-example-bla-bla?path=script.js%3A1%3A0)

### Acknowledgements
- My mentor for continuous helpful feedback
- The Code Institute for their support and guidance
- Family and friends who tested the game and provided feedback