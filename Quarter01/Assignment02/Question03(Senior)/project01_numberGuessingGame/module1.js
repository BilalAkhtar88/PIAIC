import chalk from "chalk";
import inquirer from 'inquirer';
export function welcome(attempts) {
    console.log(chalk.bold.greenBright("WELCOME TO NUMBER GUESSING GAME!\n"));
    console.log(chalk.yellow("The robot has selected a number between 1 and 10."));
    console.log(chalk.yellow(`Try to guess your Lucky Number in ${attempts} attempts!\n`));
}
export async function startGame(maxAttempts, a, b) {
    let attempts = 1;
    // let score:number = 0;
    function genRanNum(a, b) {
        return Math.floor(Math.random() * (b - a + 1) + a);
    }
    let ranNum = genRanNum(a, b);
    console.log(ranNum);
    // for (let i = 0; i < 20; i++){
    //     ranNum = genRanNum(a , b);
    //     console.log("Random Number at iteration number " + i + " = " + ranNum);
    // }
    async function makeGuess() {
        while (attempts <= maxAttempts) {
            const answer = await inquirer.prompt({
                name: 'guess',
                type: 'number',
                message: `Enter your guess (between ${a} and ${b}):`,
            });
            const userGuess = answer.guess;
            //console.log(userGuess)
            if (userGuess === ranNum) {
                console.log(chalk.green(`\nCongratulations! You guessed the secret number ${ranNum} in ${attempts} attempts!\n`));
                console.log(("Your score (out of 100) is: ") + chalk.bold.blueBright(`${(maxAttempts - attempts + 1) * 100 / (maxAttempts)} \n`));
                attempts = maxAttempts + 1;
                await playAgain();
            }
            else {
                (attempts < maxAttempts) ? (console.log(chalk.red("\nTry again! ") + (`You have ${maxAttempts - attempts} attempts left to guess the secret number.\n`)))
                    :
                        (console.log(chalk.red("\nUnfortunately, you've exhausted all your attempts. ") + chalk.yellow.bold("Better luck next time!\n")));
                (attempts == maxAttempts) ? (await playAgain()) : undefined;
                attempts++;
                await makeGuess();
            }
        }
    }
    async function playAgain() {
        const answer = await inquirer.prompt({
            name: 'playAgain',
            type: 'confirm',
            message: 'Do you want to play again?',
        });
        if (answer.playAgain) {
            console.clear();
            attempts = 1;
            ranNum = genRanNum(a, b);
            // console.log(ranNum);
            await makeGuess();
        }
        else {
            console.log(chalk.blue('\nThanks for playing! Goodbye.\n'));
        }
    }
    await makeGuess();
}
