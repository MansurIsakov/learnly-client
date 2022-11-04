import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../common/types/interfaces';
import { ITeacher } from '../models/teacher.model';
import { TeachersService } from '../teachers/teachers.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private tServices: TeachersService) {}

  fetchTeachers() {
    return this.http
      .get<ResponseData<ITeacher[]>>(environment.API_ENDPOINT + '/teachers')
      .pipe(
        map((teachersResponse) => {
          const teachers = teachersResponse.results.map((teacher) => {
            return {
              ...teacher,
            };
          });

          this.tServices.setTeachers(teachers);

          return teachers;
        }),
        catchError(this.handleError)
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    return throwError(errorMessage);
  }
}
