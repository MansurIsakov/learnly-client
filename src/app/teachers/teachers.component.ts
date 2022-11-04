import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ITeacher } from '../models/teacher.model';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  isLoading: boolean = false;
  teachers: ITeacher[];

  constructor(private tService: TeachersService) {}

  ngOnInit(): void {
    this.teachers = this.tService.getTeachers();
  }
}
