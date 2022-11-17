import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITask, ResponseData } from '../common/types/interfaces';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private readonly _tasks = new BehaviorSubject<ITask[]>(null);
  readonly tasks$ = this._tasks.asObservable();

  get tasksData(): ITask[] {
    return this._tasks.getValue();
  }

  set tasksData(tasks: ITask[]) {
    this._tasks.next(tasks);
  }

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http
      .get<ResponseData<ITask[]>>(environment.API_ENDPOINT + '/tasks')
      .pipe(
        map((resData) => {
          this.tasksData = resData.results;
          return resData.results;
        }),
        catchError(this.handleError)
      );
  }

  addTask(taskData: ITask) {
    return this.http
      .post<ResponseData<ITask[]>>(
        environment.API_ENDPOINT + '/tasks',
        taskData
      )
      .pipe(
        map((resData) => {
          this.tasksData = resData.results;
        }),
        catchError(this.handleError)
      );
  }

  updateTask(taskId: string, taskData: ITask) {
    return this.http
      .put<ResponseData<ITask[]>>(
        environment.API_ENDPOINT + '/tasks/' + taskId,
        taskData
      )
      .pipe(
        map((resData) => {
          this.tasksData = resData.results;
        }),
        catchError(this.handleError)
      );
  }

  deleteTask(taskId: string) {
    return this.http
      .delete<ResponseData<ITask[]>>(
        environment.API_ENDPOINT + '/tasks/' + taskId
      )
      .pipe(
        map(() => {
          this.tasksData = this.tasksData.filter((task) => task.id !== taskId);
        }),
        catchError(this.handleError)
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    return throwError(errorMessage);
  }
}
