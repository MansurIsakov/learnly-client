import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IClass } from 'src/app/common/types/interfaces';
import { ScheduleService } from 'src/app/schedule/schedule.service';

@Component({
  selector: 'app-schedule-edit-list',
  templateUrl: './schedule-edit-list.component.html',
  styleUrls: ['./schedule-edit-list.component.scss'],
})
export class ScheduleEditListComponent implements OnInit, OnDestroy {
  @Input() currentModule;
  subs: Subscription[] = [];
  response: string = null;

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {}

  addClass(classData: IClass) {
    this.subs.push(
      this.scheduleService.addClass(classData).subscribe(
        () => {
          this.response = 'Successfully added class';
        },
        (errorMessage) => {
          this.response = errorMessage;
        }
      )
    );
  }

  removeClass(classData: IClass) {
    this.subs.push(
      this.scheduleService.removeClass(classData).subscribe(
        () => {
          this.response = 'Successfully removed class';
        },
        (errorMessage) => {
          this.response = errorMessage;
        }
      )
    );
  }

  onHandleError() {
    this.response = null;
  }

  ngOnDestroy(): void {
    if (this.subs.length > 0) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }
}
