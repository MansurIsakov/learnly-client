import { Component, Input, OnInit } from '@angular/core';
import { IClass } from 'src/app/common/types/interfaces';

@Component({
  selector: 'app-schedule-class',
  templateUrl: './schedule-class.component.html',
  styleUrls: ['./schedule-class.component.scss'],
})
export class ScheduleClassComponent implements OnInit {
  @Input() class: IClass;
  @Input() index: number;

  constructor() {}

  ngOnInit(): void {}
}
