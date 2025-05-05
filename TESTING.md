# Bugs Discovered:
## Image display issues
* The images associated with each question needed to be hidden until each question is answered and would need to be removed when the user selects an option.
* To solve this issue I added created a div class with blur filter which to the Image element which is removed when the user selects an option.

## Question Generator
* The list of questions for each round need to be generated randomly and ensure they are not being repeated. 
* This problem was solved by using a random function as well as a splice to remove a generated question from the array list.

## Game restart
* Due to the 