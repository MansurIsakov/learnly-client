import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseData } from '../common/types/interfaces';
import { IModule } from '../models/module.model';
import { IUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class ModulesService {
  constructor(private http: HttpClient) {}
  //   Make it observable to make it reactive
  userModules: IModule[] = [];
  userModules$ = new Subject<IModule[]>();

  setCoreModules(id: string) {
    return this.http
      .get<ResponseData<IUser>>(
        environment.API_ENDPOINT + '/users/' + id + '/modules/core'
      )
      .pipe(catchError(this.handleError));
  }

  getUserModules(id: string) {
    return this.http
      .get<ResponseData<IModule>>(
        environment.API_ENDPOINT + '/users/' + id + '/modules'
      )
      .pipe(catchError(this.handleError));
  }

  addModule(id: string, moduleId: string) {
    return this.http
      .post<ResponseData<IModule>>(
        environment.API_ENDPOINT + '/users/' + id,
        moduleId
      )
      .pipe(catchError(this.handleError));
  }

  deleteModule(id: string, moduleId: string) {
    return this.http
      .delete<ResponseData<IModule>>(
        environment.API_ENDPOINT + '/users/' + id,
        { body: moduleId }
      )
      .pipe(catchError(this.handleError));
  }

  isModulesEmpty() {
    console.log(this.userModules);

    return this.userModules.length === 0;
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    return throwError(errorMessage);
  }
}
