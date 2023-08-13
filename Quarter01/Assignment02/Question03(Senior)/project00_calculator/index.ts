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
import * as operations from "./operations.js"

let result:number;

const answers = await inquirer.prompt(
    [
        {
            name: "num1",
            type: "number",
            message: "Enter the first operand: "
        },
        {
            name: "num2",
            type: "number",
            message: "Enter the second operand: "
        },
        {
            name: "operation",
            type: "checkbox",
            message: "Select the operator: ",
            choices: ["Addition", "Subtraction", "Multiplication", "Division", "Remainder", "Exponentiation"]
        }
    ]
)

async function calculatorMain(){
    if (answers.operation == "Addition") {
        result = operations.default(answers.num1, answers.num2);
        console.log("You selected " +  chalk.green.bold("addition") + " operation. Adding " + chalk.blue.bold(answers.num1) + " to "  + chalk.blue.bold(answers.num2) + " gives " + chalk.green.bold(result) + " .");
    }
    else if (answers.operation == "Subtraction") {
        result = operations.subtract(answers.num1, answers.num2);
        console.log("You selected " +  chalk.green.bold("subtraction") + " operation. Subtracting " + chalk.blue(answers.num2) + " from "  + chalk.blue(answers.num1) + " gives " + chalk.green.bold(result) + " .");
    }
    else if (answers.operation == "Multiplication") {
        result = operations.multiply(answers.num1, answers.num2);
        console.log("You selected " +  chalk.green.bold("multiplication") + " operation. Multiplying " + chalk.blue(answers.num1) + " with "  + chalk.blue(answers.num2) + " gives " + chalk.green.bold(result) + " .");
    }
    else if (answers.operation == "Division") {
        result = operations.divide(answers.num1, answers.num2);
        console.log("You selected " +  chalk.green.bold("division") + " operation. Dividing " + chalk.blue(answers.num1) + " by "  + chalk.blue(answers.num2) + " gives " + chalk.green.bold(result) + " .");
    }
    else if (answers.operation == "Remainder") {
        result = operations.remainder(answers.num1, answers.num2);
        console.log("You selected " +  chalk.green.bold("remainder") + " operation. Remainder after dividing " + chalk.blue(answers.num1) + " with "  + chalk.blue(answers.num2) + " is " + chalk.green.bold(result) + " .");
    }
    else if (answers.operation == "Exponentiation") {
        result = operations.exponentiation(answers.num1, answers.num2);
        console.log("You selected " +  chalk.green.bold("exponentiation") + " operation. " + chalk.blue(answers.num1) + " to the power of "  + chalk.blue(answers.num2) + " gives " + chalk.green.bold(result) + " .");
    }
}

calculatorMain();

