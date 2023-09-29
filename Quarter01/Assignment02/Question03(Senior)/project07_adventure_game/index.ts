#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import { Player, Enemy, getRandomNumber } from './game.js';
import { displayWelcomeMessage, displayInstructions } from './ui.js';

async function startGame() {
  const player = new Player();
  const enemies: Enemy[] = [
    new Enemy('Israel', 75, 25),
    new Enemy('India', 75, 25),
    new Enemy('USA', 75, 25),
    new Enemy('China', 75, 25),
  ];

  displayWelcomeMessage();
  displayInstructions();

  const playerNameResponse = await inquirer.prompt({
    type: 'input',
    name: 'nameInput',
    message: 'Enter your name:',
  });
  player.setName(playerNameResponse.nameInput);

  while (true) {
    const menuResponse = await inquirer.prompt({
      type: 'list',
      name: 'menuInput',
      message: 'Main Menu:',
      choices: ['Play', 'Quit'],
    });

    if (menuResponse.menuInput === 'Quit') {
      console.log(chalk.bold.red(`Thanks for playing, ${player.getName()}! Your final score: ${player.getScore()}`));
      break;
    } else if (menuResponse.menuInput === 'Play') {
      const currentEnemy = enemies[getRandomNumber(0, enemies.length)];
      console.log(chalk.bold(`\n${currentEnemy.getName()} has appeared!\n`));

      while (player.getHealth() > 0 && currentEnemy.getHealth() > 0) {
        const battleResponse = await inquirer.prompt({
          type: 'list',
          name: 'battleInput',
          message: 'Choose your action:',
          choices: ['Attack', 'Defend', 'Heal', 'Run'],
        });

        switch (battleResponse.battleInput) {
          case 'Attack':
            const playerAttack = getRandomNumber(0, player.getAttack());
            const enemyAttack = getRandomNumber(0, currentEnemy.getAttack());
            currentEnemy.reduceHealth(playerAttack);
            player.reduceHealth(enemyAttack);
            console.log(chalk.yellow(`You did ${playerAttack} damage, ${currentEnemy.getName()}'s health: ${currentEnemy.getHealth()}`));
            console.log(chalk.yellow(`${currentEnemy.getName()} did ${enemyAttack} damage, your health: ${player.getHealth()}\n`));
            break;

          case 'Defend':
            const nerfedEnemyAttack = getRandomNumber(0, currentEnemy.getAttack());
            player.reduceHealth(nerfedEnemyAttack);
            if (nerfedEnemyAttack === 0) {
              console.log(chalk.green('Enemy attack nullified\n'));
            } else if (nerfedEnemyAttack < currentEnemy.getAttack()) {
              console.log(chalk.green(`Enemy attack reduced by: ${currentEnemy.getAttack() - nerfedEnemyAttack}\n`));
              console.log(chalk.yellow(`You received ${nerfedEnemyAttack} damage, your health: ${player.getHealth()}\n`));
            } else {
              console.log(chalk.red('Defense failed\n'));
            }
            break;

          case 'Heal':
            if (player.getHealingPotions() > 0) {
              if (player.getHealth() > player.getMaxHealth() - 30) {
                player.setHealth(player.getMaxHealth());
              } else {
                player.increaseHealth(30);
              }
              player.useHealingPotion();
              console.log(chalk.green(`Healing potion used, health +30, remaining potions: ${player.getHealingPotions()}\n`));
            } else {
              console.log(chalk.red('No healing potions\n'));
            }
            break;

          case 'Run':
            console.log(chalk.cyan(`\nYou ran away from ${currentEnemy.getName()}\n`));
            currentEnemy.reduceHealth(currentEnemy.getHealth()); // Set enemy health to 0 to end the battle
            break;
        }

        if (currentEnemy.getHealth() <= 0 && battleResponse.battleInput !== 'Run') {
          const dropChance = getRandomNumber(0, 100);
          if (dropChance > 50) {
            player.receiveHealingPotion();
            console.log(chalk.green(`Enemy dropped a potion, potions +1\n`));
          }
          player.increaseScore(10);
          console.log(chalk.bold.green(`You defeated ${currentEnemy.getName()}! Congratulations, your score: ${player.getScore()}\n`));
          break;
        }

        if (player.getHealth() <= 0) {
          console.log(chalk.bold.red(`Your health is ${player.getHealth()}, you lost.\n`));
          break;
        }
      }
    }
  }
}

startGame();