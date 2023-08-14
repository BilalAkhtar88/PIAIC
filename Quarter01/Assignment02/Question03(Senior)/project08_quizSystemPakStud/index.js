#!/usr/bin/env node
//For further explanation on the code and why the output is poorly formatted when using no explicit Promise I have compile a word docuent that is not uploaded, pls.
import showBanner from "node-banner";
import chalk from "chalk";
import { q1, q2, q3, q4, q5 } from "./questions.js";
import { chkRes, dispFinalMarks } from "./results.js";
async function banner() {
    await new Promise((res) => {
        showBanner('   QUIZ', 'Pakistan Studies - 5 Questions');
        setTimeout(res, 2000);
    });
}
let instructions = () => {
    console.log(chalk.bold.underline("\nInstructions:\n".toUpperCase()));
    console.log(chalk.bold("1. ") + ("You will have only one attempt to solve each question in this computer-based quiz."));
    console.log(chalk.bold("2. ") + ("There will be ") + chalk.bold.underline("no negative marking") + (" for an incorrect answer."));
    console.log(chalk.bold("3. ") + ("After attempting each question, the ") + chalk.green.bold("Correct ") + ("or ") + chalk.red.bold("Incorrect ") + ("status will be displayed immediately."));
    console.log(chalk.bold("4. ") + ("Final result will be displayed after all questions. ") + chalk.bgWhiteBright.bold("Correct answers = 1 mark each.") + (" ") + chalk.bgWhiteBright.bold("Total marks = 5"));
    console.log(chalk.bold("5. ") + ("Stay focused and Good Luck!\n"));
};
async function startQuiz() {
    let corr;
    let ans1 = await q1();
    chkRes(ans1);
    let ans2 = await q2();
    chkRes(ans2);
    let ans3 = await q3();
    chkRes(ans3);
    let ans4 = await q4();
    chkRes(ans4);
    let ans5 = await q5();
    chkRes(ans5);
}
(async () => {
    await banner();
    instructions();
    await startQuiz();
    dispFinalMarks();
})();
