import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../common/types/interfaces';
import { IModule } from '../models/module.model';
import { ISchedule } from '../models/schedule.model';

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  constructor(private http: HttpClient) {}

  //   Remove any
  private readonly _schedule = new BehaviorSubject<any[]>([]);
  readonly schedule$ = this._schedule.asObservable();

  get scheduleData(): ISchedule[] {
    return this._schedule.getValue();
  }

  set scheduleData(schedule: any) {
    this._schedule.next(schedule);
  }

  fetchSchedule() {
    return this.http
      .get<ResponseData<ISchedule>>(environment.API_ENDPOINT + '/schedule')
      .pipe(
        map((schedule) => {
          return schedule.results;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    return throwError(errorMessage);
  }
}
