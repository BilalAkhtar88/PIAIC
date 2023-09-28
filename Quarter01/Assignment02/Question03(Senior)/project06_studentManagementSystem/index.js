#!/usr/bin/env node
// index.ts
import inquirer from 'inquirer';
import chalk from 'chalk';
import showBanner from 'node-banner';
import { StudentManager } from './studentManager.js';
async function main() {
    await showBanner('StudentScribe', 'Managing Students from Enrollment to Graduation!', 'yellow');
    const manager = new StudentManager();
    while (true) {
        const { choice } = await inquirer.prompt({
            type: 'list',
            name: 'choice',
            message: 'Select an action:',
            choices: [
                'Add Student',
                'Enroll Student',
                'View Balance',
                'Pay Tuition',
                'Show Student Status',
                'Add Grade',
                'View Completed Courses',
                'Exit',
            ],
        });
        if (choice === 'Add Student') {
            const { name, email, mobile, fatherName, age, postalAddress } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Enter student name:',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Enter student email:',
                },
                {
                    type: 'input',
                    name: 'mobile',
                    message: 'Enter student mobile number:',
                },
                {
                    type: 'input',
                    name: 'fatherName',
                    message: "Enter student's father's name:",
                },
                {
                    type: 'number',
                    name: 'age',
                    message: 'Enter student age:',
                },
                {
                    type: 'input',
                    name: 'postalAddress',
                    message: 'Enter student postal address:',
                },
            ]);
            const student = manager.addStudent(name, email, mobile, fatherName, age, postalAddress);
            console.log(chalk.green(`Student added. ID: ${student['id']}`));
        }
        else if (choice === 'Enroll Student') {
            const { studentId, courseName, courseFee } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'studentId',
                    message: 'Enter student ID:',
                },
                {
                    type: 'input',
                    name: 'courseName',
                    message: 'Enter course name:',
                },
                {
                    type: 'number',
                    name: 'courseFee',
                    message: 'Enter course fee:',
                },
            ]);
            const student = manager.findStudentById(parseInt(studentId));
            if (student) {
                student.enrollCourse(courseName, courseFee);
                console.log(chalk.green('Student enrolled in the course.'));
            }
            else {
                console.log(chalk.red('Student not found.'));
            }
        }
        else if (choice === 'View Balance') {
            const { studentId } = await inquirer.prompt({
                type: 'input',
                name: 'studentId',
                message: 'Enter student ID:',
            });
            const student = manager.findStudentById(parseInt(studentId));
            if (student) {
                console.log(chalk.cyan(`Balance for Student ${student['id']}: $${student.viewBalance()}`));
            }
            else {
                console.log(chalk.red('Student not found.'));
            }
        }
        else if (choice === 'Pay Tuition') {
            const { studentId, amount } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'studentId',
                    message: 'Enter student ID:',
                },
                {
                    type: 'number',
                    name: 'amount',
                    message: 'Enter tuition amount:',
                },
            ]);
            const student = manager.findStudentById(parseInt(studentId));
            if (student) {
                const dueAmount = student.viewDueAmount();
                if (dueAmount > 0) {
                    console.log(chalk.yellow(`Due Amount for Student ${student['id']}: $${dueAmount}`));
                }
                if (amount > 0) {
                    student.payTuition(amount);
                    console.log(chalk.green('Tuition fee paid.'));
                }
                else {
                    console.log(chalk.yellow('Please enter a valid tuition amount.'));
                }
            }
            else {
                console.log(chalk.red('Student not found.'));
            }
        }
        else if (choice === 'Show Student Status') {
            const { studentId } = await inquirer.prompt({
                type: 'input',
                name: 'studentId',
                message: 'Enter student ID:',
            });
            const student = manager.findStudentById(parseInt(studentId));
            if (student) {
                student.showStatus();
            }
            else {
                console.log(chalk.red('Student not found.'));
            }
        }
        else if (choice === 'Add Grade') {
            const { studentId, courseName, grade } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'studentId',
                    message: 'Enter student ID:',
                },
                {
                    type: 'input',
                    name: 'courseName',
                    message: 'Enter course name:',
                },
                {
                    type: 'input',
                    name: 'grade',
                    message: 'Enter student grade for the course:',
                },
            ]);
            const student = manager.findStudentById(parseInt(studentId));
            if (student) {
                student.addGrade(courseName, grade);
                console.log(chalk.green('Grade added.'));
            }
            else {
                console.log(chalk.red('Student not found.'));
            }
        }
        else if (choice === 'View Completed Courses') {
            const { studentId } = await inquirer.prompt({
                type: 'input',
                name: 'studentId',
                message: 'Enter student ID:',
            });
            const student = manager.findStudentById(parseInt(studentId));
            if (student) {
                const completedCourses = student.getCompletedCourses();
                if (completedCourses.length === 0) {
                    console.log(chalk.cyan('No completed courses.'));
                }
                else {
                    console.log(chalk.green('Completed Courses:'));
                    completedCourses.forEach((course) => {
                        console.log(chalk.cyan(`Course: ${course.name}, Grade: ${course.grade}`));
                    });
                }
            }
            else {
                console.log(chalk.red('Student not found.'));
            }
        }
        else if (choice === 'Exit') {
            console.log(chalk.yellow('Exiting Student Management System.'));
            break;
        }
    }
}
// Wait for 1 second before calling the main function
setTimeout(await main, 1000);
