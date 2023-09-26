#!/usr/bin/env node

// Following sample user data with index, category, and PIN has been used in this example
/*
{ userId: "user1", pin: "1234", category: "standard", accountType: "savings", balance: 1000 },
{ userId: "user2", pin: "5678", category: "premium", accountType: "current", balance: 2000 },
*/

import chalk from "chalk";
import showBanner from "node-banner";
import { authenticateUser } from "./auth.js";
import {
    displayWelcomeMenu,
    selectAccountType,
    checkBalance,
    depositMoney,
    withdrawMoney,
    promptUseAgain,
} from "./atmFunctions.js"; // Import ATM functions module

let user: {
    userId: string;
    pin: number | string;
    category: string;
    accountType: string;
    balance: number;
    [key: string]: any | undefined;
};

async function welcome() {
    showBanner("BILL BANK", "A Name You Can Trust!", "green");
    setTimeout(async () => {
        user = await authenticateUser();
        await runATM(user);
    }, 1000);
}

async function runATM(user) {

    console.log(chalk.green.bold.underline("\nWelcome to the ATM!"));

    while(true){

        console.log("\n")
        const choice = await displayWelcomeMenu();
        switch (choice) {
            case "User account type selection":
                //This is a feature we have saved for future
                //We may use this feature in authentication process, as well
                let accountType = await selectAccountType();   
                if (user.accountType == accountType) {
                    console.log(chalk.greenBright("Correct account type selected!"));
                } else {
                    console.log(chalk.redBright.bold("Incorrect account type selected!"));
                }
                break;
            case "Check account balance":
                checkBalance(user);
                break;
            case "Deposit money":
                await depositMoney(user);
                break;
            case "Withdraw money":
                await withdrawMoney(user);
                break;
            case "Exit ATM application":
                console.log(chalk.yellow("Thank you for using the ATM!"));
                process.exit();
        }

        const useAgain = await promptUseAgain();
        
        if (!useAgain) {
            console.log(chalk.yellow("Thank you for using the ATM!"));
            process.exit();
        }
    }
}

welcome();
