import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user.model';

export interface ProfileResponseData {
  message: string;
  error: boolean;
  code: number;
  results: IUser;
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(id: string) {
    return this.http
      .get<ProfileResponseData>(environment.API_ENDPOINT + '/users/' + id)
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          return resData.results;
        })
      );
  }

  updateProfile(id: string, userData: IUser) {
    return this.http
      .put<ProfileResponseData>(
        environment.API_ENDPOINT + '/users/' + id,
        userData
      )
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          return resData.results;
        })
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
