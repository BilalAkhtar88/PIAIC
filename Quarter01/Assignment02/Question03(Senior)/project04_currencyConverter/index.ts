#!/usr/bin/env node

// index.ts
import inquirer from 'inquirer';
import { convertCurrency, printConversionResult } from './converter.js';
import { exchangeRates } from './currency.js';
import showBanner from 'node-banner';
import chalk from 'chalk';

const questions = [
    {
        type: 'input',
        name: 'amount',
        message: 'Enter the amount to convert:',
        validate: (value: any) => {
            if (!isNaN(parseFloat(value))) {
            return true;
            }
            return 'Please enter a valid number';  },
    },
    {
        type: 'list',
        name: 'fromCurrency',
        message: 'Select the source currency:',
        choices: Object.keys(exchangeRates),
    },
    {
        type: 'list',
        name: 'toCurrency',
        message: 'Select the target currency:',
        choices: (answers:any) => {
            // Filter out the selected 'fromCurrency'
            return Object.keys(exchangeRates).filter((currency) => currency !== answers.fromCurrency);
        },
    },
];

async function welcome() {
    showBanner('Transformer',chalk.greenBright.bold.underline("Transforming Dollars to Rupees and More!"), 'yellow');
    setTimeout(async () =>{
        await main();
    }, 1000 );
}

async function main() {
  const answers = await inquirer.prompt(questions);
  const amount = parseFloat(answers.amount);
  const fromCurrency = answers.fromCurrency;
  const toCurrency = answers.toCurrency;

  const convertedAmount = convertCurrency(amount, fromCurrency, toCurrency);

  await printConversionResult(amount, fromCurrency, toCurrency, convertedAmount);

  const repeat = await inquirer.prompt (
    [
        {
            type: 'confirm',
            name: 'anotherConversion',
            message: 'Do you want to perform another conversion?',
            default: true,
        },
    ]
    )

    if (repeat.anotherConversion) await main();
}

await welcome();
