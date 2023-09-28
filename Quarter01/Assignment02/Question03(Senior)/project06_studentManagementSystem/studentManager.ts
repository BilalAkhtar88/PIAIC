// studentManager.ts
import { Student } from './student.js';

export class StudentManager {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  addStudent(name: string, email: string, mobile: string, fatherName: string, age: number, postalAddress: string) {
    const student = new Student(name, email, mobile, fatherName, age, postalAddress);
    this.students.push(student);
    return student;
  }

  findStudentById(id: number) {
    return this.students.find((student) => student['id'] === id);
  }
}