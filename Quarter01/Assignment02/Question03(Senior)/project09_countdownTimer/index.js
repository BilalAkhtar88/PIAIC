#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
function displayTitle() {
    console.log(chalk.blue('--------------------------'));
    console.log(chalk.bold('Countdown Timer'));
    console.log(chalk.blue('--------------------------'));
}
async function startCountdown() {
    displayTitle();
    const now = new Date();
    const currentDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'targetDate',
            message: 'Enter the target date and time (YYYY-MM-DD HH:mm:ss):',
            default: currentDateTime,
        },
    ]);
    const targetDate = new Date(userInput.targetDate);
    const interval = setInterval(() => {
        const now = new Date();
        const remainingTime = targetDate.getTime() - now.getTime();
        const remainingSeconds = Math.floor(remainingTime / 1000);
        if (remainingSeconds <= 0) {
            clearInterval(interval);
            console.log(chalk.green('Countdown finished!'));
        }
        else {
            console.log(chalk.yellow(`Time remaining: ${remainingSeconds} seconds`));
        }
    }, 1000);
}
async function main() {
    await startCountdown();
}
await main();
