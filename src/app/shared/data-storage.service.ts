import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../common/types/interfaces';
import { IModule } from '../models/module.model';
import { ITeacher } from '../models/teacher.model';
import { ModulesService } from '../modules/modules.service';
import { TeachersService } from '../teachers/teachers.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private tServices: TeachersService,
    private modulesService: ModulesService
  ) {}

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

  fetchUserModules() {
    return this.http
      .get<ResponseData<IModule[]>>(environment.API_ENDPOINT + '/user/modules')
      .pipe(
        map((modulesResponse) => {
          this.modulesService.userModules = modulesResponse.results;
          this.modulesService.userCredits = modulesResponse.credits;

          return modulesResponse.results;
        }),
        catchError(this.handleError)
      );
  }

  fetchAllModules() {
    return this.http
      .get<ResponseData<IModule[]>>(environment.API_ENDPOINT + '/modules')
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
