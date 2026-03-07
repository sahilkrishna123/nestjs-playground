import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {id: 1, name: 'sahil', age: 22},
        {id: 2, name: 'moin', age: 28},
        {id: 3, name: 'wajid', age: 32}
    ];

    getAllStudent(){
        return this.students;
    }
    getStudentById(id: number){
        const student = this.students.find((s)=> s.id === id);
        if(!student) throw new NotFoundException('Student not found.'); 
        return student;
    }

    // POST
    createStudent(data: {name: string; age: number}){
        const newStudent = {
            id: Date.now(),
            ...data,
        };
        this.students.push(newStudent);
        return newStudent;
    }

    // PATCH
    patchStudent(id: number, data: Partial<{name: string; age: number}>){
        const student = this.getStudentById(id);
        Object.assign(student, data);
        return student;
    }

    // DELETE
    deleteStudent(id: number){
        const index = this.students.findIndex((s)=> s.id === id);
        if(index === -1) throw new NotFoundException('Student not found!');
        const deleted = this.students.splice(index,1);
        return {message: 'Student deleted', student: deleted[0]};
    }
}
