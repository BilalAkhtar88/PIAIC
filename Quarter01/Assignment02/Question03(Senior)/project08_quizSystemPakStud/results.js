import chalk from "chalk";
let marksObt = 0;
let checkAns = (ans) => {
    if (ans) {
        console.log(chalk.green.bold("Correct\n"));
    }
    else {
        console.log(chalk.red.bold("Incorrect\n"));
    }
    ;
};
export async function chkRes(ans) {
    checkAns(ans);
    if (ans) {
        marksObt++;
    }
}
export let dispFinalMarks = () => {
    if (marksObt >= 3) {
        console.log(chalk.bold.underline("Final Result:") + chalk.bold.green(" Congratulations!") + " You obtained " + chalk.bold.underline.green(`${marksObt} out of 5`) + " marks.\n");
    }
    else {
        console.log(chalk.bold.underline("Final Result:") + " Better Luck Next Time! You obtained " + chalk.bold.underline.red(`${marksObt} out of 5`) + " marks.\n");
    }
};
