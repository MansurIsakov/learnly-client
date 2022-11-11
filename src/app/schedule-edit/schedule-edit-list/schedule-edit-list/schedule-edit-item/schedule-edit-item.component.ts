import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IClass } from 'src/app/common/types/interfaces';

@Component({
  selector: 'app-schedule-edit-item',
  templateUrl: './schedule-edit-item.component.html',
  styleUrls: ['./schedule-edit-item.component.scss'],
})
export class ScheduleEditItemComponent implements OnInit {
  @Input() class;
  @Output() addClassEvent: EventEmitter<IClass> = new EventEmitter<IClass>();
  @Output() removeClassEvent: EventEmitter<IClass> = new EventEmitter<IClass>();

  constructor() {}

  ngOnInit(): void {}

  addClass(classData: IClass) {
    this.addClassEvent.emit(classData);
  }

  removeClass(classData: IClass) {
    this.removeClassEvent.emit(classData);
  }
}
