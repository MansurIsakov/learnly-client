import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  isEmpty = isEmpty;

  constructor(
    private route: ActivatedRoute,
    private tService: TeachersService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.teacher = this.tService.getTeacher(params['id']);
    });
  }
}
