import { welcome, startGame } from "./module1.js";
//Rules of the game:
//Case 1: Prompt User to:
//Option 1: Generate new random number in each iteration
//Option 2: First Guess correctly the previously generated random number then generate new one 
//Correct guess gives you +1 point.
//Total numbers is number of points divided by number of turns taken.
//If guessed correct thn check for case 1 (Option 2) and display points.
const numOfTurns = 3;
const min = 1;
const max = 10;
welcome(numOfTurns);
startGame(numOfTurns, min, max);
//await startGame(numOfTurns,min, max);
