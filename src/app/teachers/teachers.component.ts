import { Component, OnInit, Output } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { ITeacher } from '../models/teacher.model';
import { TeachersResponseData, TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  isLoading: boolean = false;
  teachers$: Observable<ITeacher[] & ITeacher>;

  constructor(private tService: TeachersService) {}

  ngOnInit(): void {
    this.teachers$ = this.tService.getAllTeachers();
  }
}
