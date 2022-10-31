import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITeacher } from '../models/teacher.model';

export interface TeachersResponseData {
  message: string;
  error: boolean;
  code: number;
  results: ITeacher[];
}

@Injectable({ providedIn: 'root' })
export class TeachersService {
  constructor(private http: HttpClient) {}

  getAllTeachers() {
    return this.http
      .get<TeachersResponseData>(environment.API_ENDPOINT + '/teachers')
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
