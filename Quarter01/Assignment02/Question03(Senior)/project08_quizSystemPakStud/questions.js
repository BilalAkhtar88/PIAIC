import inquirer from "inquirer";
//import chalk from "chalk";
export async function q1() {
    const answer1 = await inquirer.prompt([
        {
            name: "Q1",
            type: "list",
            message: ("Q. Pakistan tested first nuclear weapon on: "),
            choices: ["24 May 1997", "26 May 1998", "28 May 1998", "30 May 1999"]
        }
    ]);
    return (answer1.Q1);
}
/*
let answer1:boolean;

const answers = await inquirer.prompt(
    [
        {
            name:"Q1",
            type:"list",
            message: ("Q. " + "Pakistan tested first nuclear weapon on: "),
            choices:["24 May 1997", "26 May 1998", "28 May 1998", "30 May 1999"]
        }
    ]
);

answer1 = (answers.Q1 == "28 May 1998");

export default answer1;
*/ 
