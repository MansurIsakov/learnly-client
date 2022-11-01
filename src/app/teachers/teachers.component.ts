import { Component, OnInit, Output } from '@angular/core';
import { finalize } from 'rxjs';
import { ITeacher } from '../models/teacher.model';
import { TeachersService } from './teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
})
export class TeachersComponent implements OnInit {
  isLoading: boolean = false;
  @Output() teachers: ITeacher[];

  constructor(private tService: TeachersService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.tService
      .getAllTeachers()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      // unsubsrcibe?
      .subscribe((teachers) => {
        this.teachers = teachers;
      });
  }
}
