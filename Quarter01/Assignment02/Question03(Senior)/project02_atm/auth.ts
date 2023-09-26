import inquirer from "inquirer";
import chalk from "chalk"; // Import chalk for text formatting

const maxAttempts = 3; // Maximum PIN entry attempts allowed

// Array of objects storing sample user data with index, category, and PIN
const users = [
    { userId: "user1", pin: "1234", category: "standard", accountType: "savings", balance: 1000 },
    { userId: "user2", pin: "5678", category: "premium", accountType: "current", balance: 2000 },
];

export async function authenticateUser() {
    let attempts = 0;
    let user: {
        userId: string;
        pin: number | string;
        category: string;
        accountType: string;
        balance: number;
        [key: string]: any | undefined;
    };

    while (attempts < maxAttempts) {
        const authentication = await inquirer.prompt([
            {
                type: "input",
                name: "userName",
                message: "Enter your user ID: ",
                validate: async function (input) {
                    user = users.find((u) => u.userId === input); // Gives error in typescript only, not in javascript
                    if (user) {
                        return true; // User found, input is valid
                    } else {
                        console.log(chalk.red("\nYou have entered an incorrect User ID."));
                        return false; // User not found, input is invalid
                    }
                },
            },
            {
                type: "password",
                name: "pin",
                message: "Enter your PIN: ",
                validate: async function (input) {
                    if (user.pin === input) {
                        attempts = maxAttempts;
                        return true;
                    } else {
                        attempts++;
                        console.log(chalk.red(`\nAuthentication failed. ${maxAttempts - attempts} attempts remaining.`));
                        if (attempts < maxAttempts) {
                            return false;
                        } else {
                            console.log(chalk.red("\nMaximum PIN entry attempts reached. ATM access blocked."));
                            process.exit();
                        }
                    }
                },
            },
        ]);
    }

    return user;
}