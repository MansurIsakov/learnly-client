import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../common/types/interfaces';
import { ITeacher } from '../models/teacher.model';

@Injectable({ providedIn: 'root' })
export class TeachersService {
  teachers: ITeacher[] = [];
  teacher = new Subject<ITeacher>();

  constructor(private http: HttpClient) {}

  getAllTeachers() {
    return this.http
      .get<ResponseData<ITeacher[]>>(environment.API_ENDPOINT + '/teachers')
      .pipe(
        map((resData) => {
          this.teachers = resData.results;
          console.log(this.teachers);

          return resData.results;
        }),
        catchError(this.handleError)
      );
  }

  getTeacher(id: string) {
    // this.teacher.next(this.teachers.find((t) => t._id === id));
    // console.log(this.teacher);

    return this.http
      .get<ResponseData<ITeacher>>(environment.API_ENDPOINT + '/teachers/' + id)
      .pipe(
        map((resData) => {
          return resData.results;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    return throwError(errorMessage);
  }
}
