#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

class Person {
  private personality: string;

  constructor() {
    this.personality = 'Mystery';
  }

  askQuestion(answer: number) {
    if (answer === 1) {
      this.personality = 'Extrovert';
    } else {
      this.personality = 'Introvert';
    }
  }

  getPersonality(): string {
    return this.personality;
  }
}

class Student extends Person {
  private _name: string = '';

  set name(value: string) {
    this._name = value;
  }

  get name(): string {
    return this._name;
  }
}

async function main() {
  const questions = [
    {
      type: 'list',
      name: 'personality',
      message: 'Are you an extrovert or an introvert?',
      choices: ['Extrovert', 'Introvert'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
  ];

  const answers = await inquirer.prompt(questions);
  const myStudent = new Student();

  myStudent.name = answers.name;
  myStudent.askQuestion(answers.personality === 'Extrovert' ? 1 : 2);

  console.log(chalk.green("Your name is"), chalk.greenBright.bold(`${myStudent.name}`));
  console.log(chalk.blue("Your personality is"), chalk.greenBright.bold(`${myStudent.getPersonality()}`));
}

main();
