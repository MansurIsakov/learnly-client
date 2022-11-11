import { Component, Input, OnInit } from '@angular/core';
import { IClass } from 'src/app/common/types/interfaces';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss'],
})
export class ScheduleListComponent implements OnInit {
  @Input() schedule: IClass[][];

  constructor() {}

  ngOnInit(): void {}
}
