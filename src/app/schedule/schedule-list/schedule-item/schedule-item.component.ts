import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss'],
})
export class ScheduleItemComponent implements OnInit {
  @Input() day: any;

  constructor() {}

  ngOnInit(): void {
    console.log(this.day);
  }
}
