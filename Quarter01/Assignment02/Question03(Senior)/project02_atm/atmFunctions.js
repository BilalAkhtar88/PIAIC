import inquirer from "inquirer";
import chalk from "chalk";
export async function displayWelcomeMenu() {
    const actions = [
        "User account type selection",
        "Check account balance",
        "Deposit money",
        "Withdraw money",
        "Exit ATM application",
    ];
    //Destructuring is equivalent to following code:
    /*
    const result = await inquirer.prompt( ... );
    const choice = result.choice;
    */
    const { choice } = await inquirer.prompt({
        type: "list",
        name: "choice",
        message: "Select an action:",
        choices: actions,
    });
    return choice;
}
export async function selectAccountType() {
    const { accountType } = await inquirer.prompt({
        type: "list",
        name: "accountType",
        message: "Select account type:",
        choices: ["Savings", "Current"],
    });
    return accountType.toLowerCase();
}
export async function checkBalance(user) {
    console.log(chalk.yellow.bold(`\nYour balance: ${user.balance}\n`));
}
export async function depositMoney(user) {
    const { amount } = await inquirer.prompt({
        type: "number",
        name: "amount",
        message: "Enter the amount to deposit:",
    });
    user.balance += amount;
    console.log(chalk.green.bold(`Deposited ${amount} successfully. New balance: ${user.balance}`));
}
export async function withdrawMoney(user) {
    const { amount } = await inquirer.prompt({
        type: "number",
        name: "amount",
        message: "Enter the amount to withdraw:",
    });
    if (user.accountType === "savings" && amount > 500) {
        console.log(chalk.red("Savings account has a withdrawal limit of 500."));
        return;
    }
    if (user.accountType === "current" && amount > 1000) {
        console.log(chalk.red("Current account has a withdrawal limit of 1000."));
        return;
    }
    if (amount > user.balance) {
        console.log(chalk.red("Insufficient balance."));
        return;
    }
    user.balance -= amount;
    console.log(chalk.green(`\nWithdrawn ${amount} successfully. New balance: ${user.balance} \n`));
}
export async function promptUseAgain() {
    const { useAgain } = await inquirer.prompt({
        type: "confirm",
        name: "useAgain",
        message: "Do you want to use the ATM again?",
    });
    return useAgain;
}
