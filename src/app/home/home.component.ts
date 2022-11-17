import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DAYS } from '../common/constants/days.const';
import { isEmpty } from '../common/helpers/isEmpty';
import { IClass } from '../common/types/interfaces';
import { IUser } from '../models/user.model';
import { ProfileService } from '../profile/profile.service';
import { ScheduleService } from '../schedule/schedule.service';
DatePipe;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DatePipe],
})
export class HomeComponent implements OnInit {
  user$: Observable<IUser>;
  todaySchedule$: Observable<IClass[]>;
  isEmpty = isEmpty;
  dayIndex;
  daysConst = DAYS;

  constructor(
    private profileService: ProfileService,
    private scheduleService: ScheduleService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    const weekDay = this.datePipe
      .transform(new Date(Date.now()), 'EEEE')
      .toLowerCase();

    for (let i = 0; i < DAYS.length; i++) {
      if (DAYS[i].name.toLowerCase() === weekDay) {
        this.dayIndex = i;
      }
    }

    const userId = JSON.parse(localStorage.getItem('userData'))?._id;
    this.user$ = this.profileService.getProfile(userId);
    this.todaySchedule$ = this.scheduleService.getTodaySchedule(this.dayIndex);
  }
}
