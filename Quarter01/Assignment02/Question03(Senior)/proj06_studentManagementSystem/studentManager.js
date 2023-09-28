// studentManager.ts
import { Student } from './student.js';
export class StudentManager {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(name, email, mobile, fatherName, age, postalAddress) {
        const student = new Student(name, email, mobile, fatherName, age, postalAddress);
        this.students.push(student);
        return student;
    }
    findStudentById(id) {
        return this.students.find((student) => student['id'] === id);
    }
}
