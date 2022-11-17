import { Component, Input, OnInit } from '@angular/core';
import { COURSES } from 'src/app/common/constants/courses.const';
import { LEVELS } from 'src/app/common/constants/levels.const';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-uni-widget',
  templateUrl: './uni-widget.component.html',
  styleUrls: ['./uni-widget.component.scss'],
})
export class UniWidgetComponent implements OnInit {
  @Input() user: IUser;

  uniName = 'Westminster International University in Tashkent';
  levelsConst = LEVELS;
  coursesConst = COURSES;

  constructor() {}

  ngOnInit(): void {}
}
