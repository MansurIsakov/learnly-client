import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, isEmpty, map, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModuleErrorCode } from '../common/types/errors';
import { ResponseData } from '../common/types/interfaces';
import { IModule } from '../models/module.model';
import { IUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class ModulesService {
  constructor(private http: HttpClient) {}
  private userModules: IModule[] = [];
  userModules$ = new Subject<IModule[]>();
  private allModules: IModule[];
  allModules$ = new Subject<IModule[]>();

  credits: number;

  getModules() {
    return this.userModules.slice();
  }

  getAllModules() {
    return this.allModules.slice();
  }

  setModules(modules: IModule[]) {
    this.userModules = modules;
    this.userModules$.next(this.userModules);
  }

  setAllModules(modules: IModule[]) {
    this.allModules = modules;
    this.allModules$.next(this.allModules.slice());
  }

  setCoreModules() {
    return this.http
      .get<ResponseData<IUser>>(environment.API_ENDPOINT + '/user/modules/core')
      .pipe(
        map((resData) => {
          this.setModules(resData.results.modules);
          return resData;
        }),
        catchError(this.handleError)
      );
  }

  addModule(moduleId: string) {
    return this.http
      .post<ResponseData<IUser>>(environment.API_ENDPOINT + '/user/modules', {
        moduleId: moduleId,
      })
      .pipe(
        // Anton
        map((resData) => {
          // this.userModules = resData.results.modules;
        }),
        catchError(this.handleError)
      );
  }

  removeModule(moduleId: string) {
    return this.http
      .delete<ResponseData<IUser>>(environment.API_ENDPOINT + '/user/modules', {
        body: { moduleId: moduleId },
      })
      .pipe(
        // Anton
        map((resData) => {
          this.userModules.filter((module) => module.id !== moduleId);
        }),
        catchError(this.handleError)
      );
  }

  getCourseModules(level: string, course: string) {
    return this.allModules.filter(
      (module) =>
        module.moduleLevel === +level && module.courses.includes(course)
    );
  }

  getCoreModules(level: string, course: string) {
    return this.allModules.filter(
      (module) =>
        module.type === 'core' &&
        module.moduleLevel === +level &&
        module.courses.includes(course)
    );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.code) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.code) {
      case ModuleErrorCode.USER_ALREADY_HAS_MODULE:
        errorMessage = 'You already have this module!';
        break;

      case ModuleErrorCode.MODULE_NOT_FOUND:
        errorMessage = 'Module not found!';
        break;

      case ModuleErrorCode.USER_MAX_CREDITS:
        errorMessage = 'You have reached the maximum number of credits!';
        break;

      default:
        errorMessage = 'An unknown error occurred!';
    }

    return throwError(errorMessage);
  }
}
