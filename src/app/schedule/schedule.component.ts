import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ISchedule } from '../models/schedule.model';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
  schedule$: Observable<ISchedule>;
  sub: Subscription;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.schedule$ = this.scheduleService.fetchSchedule();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
