import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user.model';
import { ResponseData } from '../common/types/interfaces';

export interface ProfileResponseData {
  results: IUser;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(id: string) {
    return this.http
      .get<ResponseData<IUser>>(environment.API_ENDPOINT + '/users/' + id)
      .pipe(
        map((resData) => {
          return resData.results;
        }),
        catchError(this.handleError)
      );
  }

  updateProfile(
    id: string,
    userData: Omit<IUser, 'course' | 'level' | 'email'>
  ) {
    return this.http
      .put<ProfileResponseData>(
        environment.API_ENDPOINT + '/users/' + id,
        userData
      )
      .pipe(
        map((resData) => {
          return resData.results;
        }),
        catchError(this.handleError)
      );
  }

  deleteProfile(id: string) {
    return this.http
      .delete<ProfileResponseData>(environment.API_ENDPOINT + '/users/' + id)
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    return throwError(errorMessage);
  }
}
