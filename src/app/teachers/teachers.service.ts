import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ITeacher } from '../models/teacher.model';

@Injectable({ providedIn: 'root' })
export class TeachersService {
  private teachers: ITeacher[] = [];
  teachersChanged = new Subject<ITeacher[]>();

  constructor() {}

  getTeachers() {
    return this.teachers.slice();
  }

  setTeachers(teachers: ITeacher[]) {
    this.teachers = teachers;
    this.teachersChanged.next(this.teachers.slice());
  }

  getTeacher(id: string) {
    return this.teachers.find((teacher) => teacher._id === id);
  }
}
