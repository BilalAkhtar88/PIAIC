#!/usr/bin/env node
//Ref: For installing Inquirer 
//1. https://github.com/panaverse/learn-typescript/tree/master/step03b_native_ECMAScript_modules
//2. https://www.youtube.com/watch?v=_oHByo8tiEY
//3. https://bobbyhadz.com/blog/typescript-top-level-await-expressions-are-only-allowed
//4. https://www.youtube.com/watch?v=8hbOlxGlWI8&list=PL57ZgM-CfWvyXmb8Hbc28BnJDP5V8LS7b&index=17
//5. https://www.typescriptlang.org/docs/handbook/compiler-options.html
//6. https://www.npmjs.com/package/firequiz
// It works when i transpile using command tsc only and not with tsc index.ts thn index.js
import chalk from 'chalk';
import inquirer from 'inquirer';
let result;
async function calc() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'num1',
            message: 'Enter the first integer: ',
            default: 0
        },
        {
            type: 'input',
            name: 'num2',
            message: 'Enter the second integer: ',
            default: 1
        },
        {
            type: 'list',
            name: 'operator',
            message: 'Select the operation.',
            choices: ['Add', 'Subtract', 'Multiply', 'Divide', 'Remainder', 'Power'],
        }
    ]);
    if (answers.operator == 'Add') {
        result = Number(answers.num1) + Number(answers.num2);
    }
    else if (answers.operator == 'Subtract') {
        result = Number(answers.num1) - Number(answers.num2);
    }
    else if (answers.operator == 'Multiply') {
        result = Number(answers.num1) * Number(answers.num2);
    }
    else if (answers.operator == 'Divide') {
        result = Number(answers.num1) / Number(answers.num2);
    }
    else if (answers.operator == 'Remainder') {
        result = Number(answers.num1) % Number(answers.num2);
    }
    else if (answers.operator == 'Power') {
        result = Number(answers.num1) ** Number(answers.num2);
    }
    console.log(chalk.yellowBright('The result of performing ') +
        chalk.red(`${answers.operator}`) +
        chalk.yellowBright(' operation on ') +
        chalk.red(`${answers.num1}`) +
        chalk.yellowBright(' and ') +
        chalk.red(`${answers.num2}`) +
        chalk.yellowBright(' is ') +
        chalk.red(`${result}`)) +
        chalk.yellowBright('.\n');
    contCalc();
}
async function contCalc() {
    const answers = await inquirer.prompt({
        name: 'continueCalc',
        type: 'input',
        message: 'Do you want to perform another operation (Y/N)?',
    });
    if (answers.continueCalc == 'Y' || answers.continueCalc == 'y') {
        console.clear();
        calc();
    }
    else {
        console.log(chalk.green(`Thank you for using the calculator!\n`));
        process.exit(0);
    }
}
// Run it with top-level await
console.clear();
await calc();
