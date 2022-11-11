import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ScheduleErrorCode } from '../common/types/errors';
import { IClass, ResponseData } from '../common/types/interfaces';
import { IModule } from '../models/module.model';
import { ISchedule } from '../models/schedule.model';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  constructor(private http: HttpClient) {}

  //   Remove any
  private readonly _schedule = new BehaviorSubject<ISchedule>(null);
  readonly schedule$ = this._schedule.asObservable();

  get scheduleData(): ISchedule {
    return this._schedule.getValue();
  }

  set scheduleData(schedule: ISchedule) {
    this._schedule.next(schedule);
  }

  createSchedule() {
    return this.http
      .post<ResponseData<ISchedule>>(
        environment.API_ENDPOINT + '/schedule',
        null
      )
      .pipe(
        map((resData) => {
          this.scheduleData = resData.results;
        }),
        catchError(this.handleError)
      );
  }

  fetchSchedule() {
    return this.http
      .get<ResponseData<ISchedule>>(environment.API_ENDPOINT + '/schedule')
      .pipe(
        map((schedule) => {
          this.scheduleData = schedule.results;
          return schedule.results;
        }),
        catchError(this.handleError)
      );
  }

  addClass(classData: IClass) {
    return this.http
      .put<ResponseData<ISchedule>>(
        environment.API_ENDPOINT + '/schedule',
        classData
      )
      .pipe(
        map((resData) => {
          this.scheduleData = resData.results;
        }),
        catchError(this.handleError)
      );
  }

  removeClass(classData: IClass) {
    return this.http
      .delete<ResponseData<ISchedule>>(environment.API_ENDPOINT + '/schedule', {
        body: classData,
      })
      .pipe(
        map((resData) => {
          this.scheduleData = resData.results;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.code) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.code) {
      case ScheduleErrorCode.NO_CLASSES_FOUND:
        errorMessage = errorRes.error.message;
        break;

      case ScheduleErrorCode.CLASS_COLLISION:
        errorMessage = errorRes.error.message;
        break;

      case ScheduleErrorCode.SCHEDULE_ALREADY_EXISTS:
        errorMessage = errorRes.error.message;
        break;
      case ScheduleErrorCode.USER_DOES_NOT_HAVE_CLASS:
        errorMessage = errorRes.error.message;
        break;
      case ScheduleErrorCode.SCHEDULE_NOT_FOUND:
        errorMessage = errorRes.error.code;
        break;
    }

    return throwError(errorMessage);
  }
}
