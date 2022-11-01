import { Component, Input, OnInit } from '@angular/core';
import { ITeacher } from 'src/app/models/teacher.model';

@Component({
  selector: 'app-teachers-item',
  templateUrl: './teachers-item.component.html',
  styleUrls: ['./teachers-item.component.scss'],
})
export class TeachersItemComponent implements OnInit {
  @Input() teacher: ITeacher;
  @Input() teacherId: string;

  constructor() {}

  ngOnInit(): void {}
}
