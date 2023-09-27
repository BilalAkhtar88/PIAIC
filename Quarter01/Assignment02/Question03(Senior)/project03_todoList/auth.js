// auth.ts
import inquirer from 'inquirer';
import chalk from 'chalk';
// In-memory storage for users
export const users = [];
// Function to register a new user
export async function registerUser() {
    const questions = [
        {
            type: 'input',
            name: 'username',
            message: 'Enter a unique username:',
            validate: (input) => {
                const userExists = users.some((user) => user.username === input);
                return userExists ? chalk.red.bold('Username already taken.\n') : true;
            },
        },
        {
            type: 'input',
            name: 'fullName',
            message: 'Enter your full name:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
            validate: (input) => {
                //We use test method here that is provided by JavaScript's regular expression objects. 
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression object for email address 
                return emailPattern.test(input) ? true : chalk.red.bold('Please enter a valid email address\n');
            },
        },
        {
            type: 'password',
            name: 'password',
            message: 'Enter your password:',
            mask: '*', // Display password input with asterisks
        },
    ];
    const answers = await inquirer.prompt(questions);
    const newUser = {
        ...answers,
        tasks: [], // Initialize tasks as an empty array for the new user
    };
    users.push(newUser);
    console.log(chalk.green('\nRegistration successful.\n'));
    return newUser;
}
// Function to authenticate a user
export async function authenticateUser() {
    const { username } = await inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter your username:',
        },
    ]);
    const user = users.find((u) => u.username === username);
    if (user) {
        const { password } = await inquirer.prompt([
            {
                type: 'password',
                name: 'password',
                message: 'Enter your password:',
                mask: '*',
            },
        ]);
        if (user.password === password) {
            console.log(chalk.green('\nAuthentication successful.\n'));
            return user;
        }
    }
    console.log(chalk.red('\nAuthentication failed.\n'));
    return null;
}
// Function to retrieve username using email
export async function forgotUsername() {
    const { email } = await inquirer.prompt({
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    });
    const user = users.find((u) => u.email === email);
    if (user) {
        console.log(chalk.yellow(`\nYour username is: ${user.username}\n`));
    }
    else {
        console.log(chalk.red('\nUser not found.\n'));
    }
}
