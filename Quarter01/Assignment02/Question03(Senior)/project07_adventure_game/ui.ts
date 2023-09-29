import chalk from 'chalk';

export function displayWelcomeMessage() {
  console.log(chalk.bold.green('Welcome to the Adventure Game!'));
}

export function displayInstructions() {
  console.log(chalk.yellow('Instructions for Playing the Adventure Game:'));
  console.log(chalk.yellow('---------------------------------------------------'));
  console.log(chalk.yellow('- You are a brave adventurer on a quest to defeat various enemies and collect points.'));
  console.log(chalk.yellow('- Each enemy has its own attack and health stats.'));
  console.log(chalk.yellow('- During battles, you can choose from the following actions:'));
  console.log(chalk.yellow('  - Attack: Launch an attack on the enemy.'));
  console.log(chalk.yellow('  - Defend: Reduce incoming enemy damage for the next turn.'));
  console.log(chalk.yellow('  - Heal: Use a healing potion to restore your health.'));
  console.log(chalk.yellow('  - Run: Attempt to flee from battle.'));
  console.log(chalk.yellow('- Defending reduces enemy damage, and healing potions restore your health.'));
  console.log(chalk.yellow('- You start with 3 healing potions and 100% health.'));
  console.log(chalk.yellow('- Collect points by defeating enemies and earn extra healing potions as a reward.'));
  console.log(chalk.yellow('- Your goal is to survive and earn the highest score!'));
  console.log(chalk.yellow('---------------------------------------------------'));
}
