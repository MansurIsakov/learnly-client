import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DAYS } from 'src/app/common/constants/days.const';
import { formatConstant } from 'src/app/common/helpers/formatConstant';
import { ISchedule } from 'src/app/models/schedule.model';
import { ScheduleService } from 'src/app/schedule/schedule.service';

@Component({
  selector: 'app-schedule-days',
  templateUrl: './schedule-days.component.html',
  styleUrls: ['./schedule-days.component.scss'],
})
export class ScheduleDaysComponent implements OnInit {
  @Input() schedule: ISchedule;

  days$: Observable<ISchedule>;
  formatConst;
  daysConst = DAYS;

  constructor(private scheduleService: ScheduleService) {
    this.formatConst = formatConstant;
  }

  ngOnInit(): void {
    this.days$ = this.scheduleService.schedule$;
  }
}
