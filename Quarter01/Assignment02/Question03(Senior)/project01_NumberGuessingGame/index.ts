#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
export {continueChoice};

async function welcome() {
  console.log(chalk.bgBlue("Number Guessing Game"));
  console.log(chalk.redBright("Rules: You have 3 lives to guess the correct Number!!!"));
  console.log(chalk.redBright("Guess number from 1 to 10"));    
  console.log(chalk.bgGreen("Lets start the game"));   
}
welcome();
let num:number=Math.ceil(Math.random()*10);
let lives=3;
//console.log(num);

async function askQuestion() {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "guess",
        message: "Guess the number",
      },
    ])
    .then(async (answers) => {//Answers had to be async for waiting to complete function recall in else if
      if (lives >= 1 && answers.guess == num) {
        console.log(chalk.bgGreenBright("Hurrah!!! You have guessed the right number"));
      } else if (lives > 1 && answers.guess != num) {
        lives--;
        console.log("Wrong guess!!! Try Again");
        console.log(chalk.redBright(`${lives} life left`));
       await askQuestion();
      } else {
        //console.log(`${--lives} life left`);
        console.log(chalk.bgRedBright("You lost"));
        console.log(chalk.bgBlue("Correct number was: "+num));
      }
    });
}

async function continueChoice() {
    do {
        await askQuestion();
        var choice = await inquirer.prompt(
            {
                type: "input",
                name: "qa",
                message: chalk.bgGrey("Do you want to play again? Press Y or y to continue")
            })
            num=Math.ceil(Math.random()*10);
            lives=3;
          }
 while (choice.qa == 'yes'|| choice.qa == 'Yes'||choice.qa == 'YES'||choice.qa == 'y'||choice.qa == 'Y');
}

continueChoice();


//#! /usr/bin/env node

import inquirer from 'inquirer';
import chalkAnimation, { rainbow } from 'chalk-animation';
import chalk from 'chalk';

function sleep () {
  return new Promise((res)=>{
    setTimeout(res  , 100)
  })
}

async function welcome() {
  const rainbow = chalkAnimation.rainbow('Welcome to the number guessing game');
  await sleep()
  rainbow.stop()
}

function randomNumber (){
  return Math.ceil(Math.random() * 5)
}



await welcome()

let score = 0
async function guessNumber() {

  var answer = await inquirer.prompt([
    {
      type: 'input',
      name: 'userInput',
      message: 'Please enter a number between 1-5 ',
    },
  ])

  let sysNum = randomNumber()
  while(answer.userInput == sysNum){
    score += 5;
    console.log(chalk.green('correct:'+ chalk.yellow('your score is: ')+ chalk.redBright(score)) )
    await inquirer.prompt([
      {
        type: 'input',
        name: 'userInput',
        message: 'Please enter a number between 1-5 ',
      },
    ])
    sysNum = randomNumber();
    
  } 
  console.log('incorrect')
  let again = await inquirer.prompt([
    {
      type:'confirm',
      name: 'replay',
      message: 'would you run again'
    }
  ])
  if(again.replay){
    score = 0;
    guessNumber()
  }

  
};



guessNumber();