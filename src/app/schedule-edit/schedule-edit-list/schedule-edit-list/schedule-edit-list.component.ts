import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-edit-list',
  templateUrl: './schedule-edit-list.component.html',
  styleUrls: ['./schedule-edit-list.component.scss'],
})
export class ScheduleEditListComponent implements OnInit {
  @Input() currentModule;

  constructor() {}

  ngOnInit(): void {}
}
