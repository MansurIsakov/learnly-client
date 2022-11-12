import { Component, Input, OnInit, Output } from '@angular/core';
import { finalize, pipe } from 'rxjs';
import { ITeacher } from 'src/app/models/teacher.model';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss'],
})
export class TeachersListComponent implements OnInit {
  @Input() teachers: ITeacher[];
  isLoading: boolean = false;
  page: number = 1;

  constructor() {}

  ngOnInit(): void {}

  startIndex(): number {
    return (this.page - 1) * 6;
  }

  endIndex(): number {
    return this.page * 6;
  }

  hasNextPage(): boolean {
    return this.endIndex() < this.teachers.length;
  }

  paginatedTeachersList(): ITeacher[] {
    return this.teachers.slice(this.startIndex(), this.endIndex());
  }
}
