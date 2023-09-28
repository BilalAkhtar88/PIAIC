#!/usr/bin/env node

import inquirer from 'inquirer';
import showBanner from 'node-banner';
import chalk from 'chalk';
import { countCharacters, countWords } from './textAnalyzer.js';

const questions = [
  {
    type: 'input',
    name: 'paragraph',
    message: 'Enter an English paragraph:',
  },
];

async function welcome() {
    showBanner("Text Analyzer", chalk.blue.bold.underline("Count Characters and Words Without Whitespaces"), 'yellow');
    setTimeout(async () => {
        await main();
    }, 1000);
}

async function main() {
    const answers = await inquirer.prompt(questions);
    const paragraph = answers.paragraph;

    const characterCount = countCharacters(paragraph);
    const wordCount = countWords(paragraph);

    // Format the numerals (counts) with a different style
    const characterCountFormatted = chalk.yellowBright.bold(characterCount.toString());
    const wordCountFormatted = chalk.blueBright.bold(wordCount.toString());

    // Display the formatted output
    console.log(chalk.green(`\nCharacter Count (excluding whitespaces): `), `${characterCountFormatted}`);
    console.log(chalk.green(`\nWord Count (excluding whitespaces): `), `${wordCountFormatted}\n`);

    const repeat = await inquirer.prompt(
        [{
            type: 'confirm',
            name: 'confirm',
            message: 'Do you want to analyze another paragraph?',
        }]
    )

    if (repeat.confirm) await main();
}

await welcome();