import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModuleErrorCode, UserErrorCode } from '../common/types/errors';
import { ResponseData } from '../common/types/interfaces';
import { IModule } from '../models/module.model';
import { IUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class ModulesService {
  constructor(private http: HttpClient) {}

  private readonly _userModules = new BehaviorSubject<IModule[]>([]);
  readonly userModules$ = this._userModules.asObservable();

  private readonly _modules = new BehaviorSubject<IModule[]>([]);
  readonly modules$ = this._modules.asObservable();

  private _credits = new BehaviorSubject<number>(0);
  readonly credits$ = this._credits.asObservable();

  get userModules(): IModule[] {
    return this._userModules.getValue();
  }

  set userModules(modules: IModule[]) {
    this._userModules.next(modules);
  }

  get modules(): IModule[] {
    return this._modules.getValue();
  }

  set modules(modules: IModule[]) {
    this._modules.next(modules);
  }

  get userCredits(): number {
    return this._credits.getValue();
  }

  set userCredits(credits: number) {
    this._credits.next(credits);
  }

  setCoreModules() {
    return this.http
      .get<ResponseData<IUser>>(environment.API_ENDPOINT + '/user/modules/core')
      .pipe(
        map((resData) => {
          this.userModules = resData.results.modules;
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
        map((resData) => {
          this.userModules = [
            ...this.userModules,
            this.modules.find((module) => module.id === moduleId),
          ];
          this.userCredits = this._credits.getValue() + 20;
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
        map((resData) => {
          this.userModules = this.userModules.filter(
            (module) => module.id !== moduleId
          );
          this.userCredits = this._credits.getValue() - 20;
        }),
        catchError(this.handleError)
      );
  }

  filteredCourseModules(level: string, course: string) {
    return this.modules$.pipe(
      map((modules) =>
        modules.filter(
          (module) =>
            module.moduleLevel === +level && module.courses.includes(course)
        )
      )
    );
  }

  filteredCoreModules(level: string, course: string) {
    return this.modules$.pipe(
      map((modules) =>
        modules.filter(
          (module) =>
            module.type === 'core' &&
            module.moduleLevel === +level &&
            module.courses.includes(course)
        )
      )
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
      case ModuleErrorCode.USER_DOES_NOT_HAVE_MODULE:
        errorMessage = "You don't have this module!";
        break;
      case ModuleErrorCode.USER_NO_CREDITS:
        errorMessage = "You don't have enough credits!";
        break;
      case ModuleErrorCode.USER_ADD_CORE_MODULE:
        errorMessage = 'You cannot add a core module!';
        break;
      case UserErrorCode.INVALID_LEVEL:
        errorMessage = 'Invalid level!';
        break;
      case ModuleErrorCode.USER_ADD_DIFFERENT_LEVEL_MODULE:
        errorMessage = 'You cannot add a module from a different level!';
        break;
      case ModuleErrorCode.USER_ADD_DIFFERENT_COURSE_MODULE:
        errorMessage = 'You cannot add a module from a different course!';
        break;
      case ModuleErrorCode.USER_NO_MODULES:
        errorMessage = 'You have no modules!';
        break;
      case ModuleErrorCode.USER_REMOVE_CORE_MODULE:
        errorMessage = 'You cannot remove a core module!';
        break;
      case ModuleErrorCode.USER_ALREADY_HAS_MODULES:
        errorMessage = 'You already have these modules!';
        break;
      default:
        errorMessage = 'An unknown error occurred!';
    }

    return throwError(errorMessage);
  }
}
