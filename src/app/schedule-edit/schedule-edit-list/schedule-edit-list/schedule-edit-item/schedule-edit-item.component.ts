import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-edit-item',
  templateUrl: './schedule-edit-item.component.html',
  styleUrls: ['./schedule-edit-item.component.scss'],
})
export class ScheduleEditItemComponent implements OnInit {
  @Input() class;

  constructor() {}

  ngOnInit(): void {}
}
