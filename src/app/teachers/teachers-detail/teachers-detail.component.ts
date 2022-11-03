import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, map, Observable, Subscription, switchMap } from 'rxjs';
import { isEmpty } from 'src/app/common/helpers/isEmpty';
import { ITeacher } from 'src/app/models/teacher.model';
import { TeachersService } from '../teachers.service';

@Component({
  selector: 'app-teachers-detail',
  templateUrl: './teachers-detail.component.html',
  styleUrls: ['./teachers-detail.component.scss'],
})
export class TeachersDetailComponent implements OnInit {
  teacher$: Observable<ITeacher[] & ITeacher>;
  isEmpty = isEmpty;

  constructor(
    private route: ActivatedRoute,
    private tService: TeachersService
  ) {}

  ngOnInit(): void {
    this.teacher$ = this.route.params.pipe(
      switchMap((params) => {
        const teacherId = params['id'];
        return this.tService.getTeacher(teacherId);
      })
    );
  }
}
