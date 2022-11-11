import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ScheduleErrorCode } from '../common/types/errors';
import { IModule } from '../models/module.model';
import { ISchedule } from '../models/schedule.model';
import { DataStorageService } from '../shared/data-storage.service';
import { ScheduleService } from './schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit, OnDestroy {
  schedule$: Observable<ISchedule>;
  modules$: Observable<IModule[]>;
  isModulesNeeded: boolean = false;
  sub: Subscription;

  constructor(
    private scheduleService: ScheduleService,
    private dsService: DataStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.scheduleService.fetchSchedule().subscribe(
      () => {
        this.schedule$ = this.scheduleService.schedule$;
      },
      (error) => {
        if (error === ScheduleErrorCode.SCHEDULE_NOT_FOUND) {
          this.isModulesNeeded = true;
        }
      }
    );
  }

  onCloseModal() {
    this.scheduleService.createSchedule().subscribe((resData) => {
      this.router.navigate(['/modules']);
    });
    this.isModulesNeeded = false;
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
