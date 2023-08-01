/* Following grading system is assumed for this question

A: 90 - 100
B: 80 - 90
C: 70 - 80
D: 60 - 70
F: Below 60

*/

function getGrade(subjMarks:number):any {
    let grade:string;

    if (subjMarks >= 90){
        grade = 'A';
    } else if (subjMarks >= 80) {
        grade = 'B';
    } else if (subjMarks >= 70) {
        grade = 'C';
    } else if (subjMarks >= 60) {
        grade = 'D';
    } else if (subjMarks < 60) {
        grade = 'F';
    }

    return grade;
}

const promptSync = require('prompt-sync')();

let numSubjs:number;
let subMarks:number;
let graded:string;

numSubjs = Number(promptSync("Enter the total number of subjects: "));

for (let i = 0; i < numSubjs; i++){
    subMarks = Number(promptSync(`Enter marks obtained in subject ${i+1}: `));
    graded = getGrade(subMarks);
    console.log(`Student obtained Grade '${graded}' in subject ${i+1}.`)   
}

//References:
//1. https://stackoverflow.com/questions/42046784/in-typescript-how-to-declare-a-function-before-its-use-c-style