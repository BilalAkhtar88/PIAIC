/* Following grading system is assumed for this question

A: 90 - 100
B: 80 - 90
C: 70 - 80
D: 60 - 70
F: Below 60

*/
var promptSync = require('prompt-sync')();
var numSubjs;
var subMarks;
var graded;
numSubjs = Number(promptSync("Enter the total number of subjects: "));
for (var i = 0; i < numSubjs; i++) {
    subMarks = Number(promptSync("Enter marks obtained in subject ".concat(i + 1, ": ")));
    graded = getGrade(subMarks);
    console.log("Student obtained Grade '".concat(graded, "' in subject ").concat(i + 1, "."));
}
function getGrade(subjMarks) {
    var grade;
    if (subjMarks >= 90) {
        grade = 'A';
    }
    else if (subjMarks >= 80) {
        grade = 'B';
    }
    else if (subjMarks >= 70) {
        grade = 'C';
    }
    else if (subjMarks >= 60) {
        grade = 'D';
    }
    else if (subjMarks < 60) {
        grade = 'F';
    }
    return grade;
}
