#!/usr/bin/env node
// index.ts
import chalk from 'chalk';
import inquirer from 'inquirer';
import showBanner from 'node-banner';
import { registerUser, authenticateUser, forgotUsername } from './auth.js';
import { manageTodoList } from './todo.js';
const menuChoices = [
    'Register',
    'Login',
    'Forgot Username',
    'Exit',
];
async function welcome() {
    showBanner("TaskMaster", "Your Robo-Assistant for Getting Things Done!", "yellow");
    setTimeout(async () => {
        await main();
    }, 1000);
}
async function main() {
    console.log(chalk.bold.green('\nWelcome to the Todo App!\n'));
    while (true) {
        const { choice } = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Main Menu:',
                choices: menuChoices,
            },
        ]);
        switch (choice) {
            case 'Register':
                const user = await registerUser();
                if (user) {
                    await manageTodoList(user);
                }
                else {
                    console.log(chalk.red('\nRegistration failed.\n'));
                }
                break;
            case 'Login':
                const loggedInUser = await authenticateUser();
                if (loggedInUser) {
                    await manageTodoList(loggedInUser);
                }
                break;
            case 'Forgot Username':
                await forgotUsername();
                break;
            case 'Exit':
                console.log(chalk.bold.yellow('\nGoodbye!\n'));
                return;
        }
    }
}
welcome();
