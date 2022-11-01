import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { isEmpty } from 'src/app/common/helpers/isEmpty';
import { ITeacher } from 'src/app/models/teacher.model';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-teachers-detail',
  templateUrl: './teachers-detail.component.html',
  styleUrls: ['./teachers-detail.component.scss'],
})
export class TeachersDetailComponent implements OnInit {
  teacher: ITeacher;
  teacherId: string;
  isEmpty = isEmpty;

  constructor(
    private route: ActivatedRoute,
    private tService: TeachersService
  ) {}

  ngOnInit(): void {
    // unsubscribe?
    this.route.params.subscribe((params) => {
      this.teacherId = params['id'];

      this.tService.getTeacher(this.teacherId).subscribe((teacher) => {
        this.teacher = teacher;
      });
    });
  }
}
