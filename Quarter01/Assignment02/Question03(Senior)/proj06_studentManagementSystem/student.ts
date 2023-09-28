// student.ts
import chalk from 'chalk';

export class Student {
  private static idCounter = 1000;
  private id: number;
  private name: string;
  private email: string;
  private mobile: string;
  private fatherName: string;
  private age: number;
  private postalAddress: string;
  private courses: { name: string; fee: number; grade?: string }[];
  private balance: number;

  constructor(name: string, email: string, mobile: string, fatherName: string, age: number, postalAddress: string) {
    this.id = Student.idCounter++;
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.fatherName = fatherName;
    this.age = age;
    this.postalAddress = postalAddress;
    this.courses = [];
    this.balance = 0;
  }

  enrollCourse(courseName: string, courseFee: number) {
    this.courses.push({ name: courseName, fee: courseFee });
    this.balance += courseFee;
  }

  viewBalance() {
    return this.balance;
  }

  payTuition(amount: number) {
    this.balance -= amount;
  }

  showStatus() {
    console.log(chalk.green.bold('Student Details:'));
    console.log(chalk.cyan(`ID: ${this.id}`));
    console.log(chalk.cyan(`Name: ${this.name}`));
    console.log(chalk.cyan(`Email: ${this.email}`));
    console.log(chalk.cyan(`Mobile: ${this.mobile}`));
    console.log(chalk.cyan(`Father's Name: ${this.fatherName}`));
    console.log(chalk.cyan(`Age: ${this.age}`));
    console.log(chalk.cyan(`Postal Address: ${this.postalAddress}`));
    console.log('Courses Enrolled:');
    this.courses.forEach((course, index) => {
      const courseInfo = course.grade ? `${course.name} (Grade: ${course.grade})` : course.name;
      console.log(`  ${index + 1}. ${courseInfo}`);
    });
    console.log(chalk.cyan(`Balance: $${this.balance}`));
  }

  addGrade(courseName: string, grade: string) {
    const course = this.courses.find((c) => c.name === courseName);
    if (course) {
      course.grade = grade;
    }
  }

  getCompletedCourses() {
    return this.courses.filter((course) => course.grade);
  }

  viewDueAmount() {
    const totalCourseFee = this.courses.reduce((total, course) => total + (course.fee || 0), 0);
    return totalCourseFee - this.balance;
  }
}