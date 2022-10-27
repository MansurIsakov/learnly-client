import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';
import { User, UserModel } from '../models/user.model';

export interface AuthResponseData {
  status: string;
  token: string;
  data: { user: UserModel };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<UserModel>(null);
  role: string | undefined;
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signup(signupData: User, password: string) {
    return this.http
      .post<AuthResponseData>('http://localhost:3000/api/v1/auth/signup', {
        ...signupData,
        password,
        passwordConfirm: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.role = resData.data.user.role;

          this.handleAuthentication(resData.data.user, resData.token);
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>('http://localhost:3000/api/v1/auth/login', {
        email,
        password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.role = resData.data.user.role;

          this.handleAuthentication(resData.data.user, resData.token);
        })
      );
  }

  autoLogin() {
    const userToken: User = JSON.parse(localStorage.getItem('userToken')!);
    const userData: User = JSON.parse(localStorage.getItem('userData')!);

    if (!userToken || !userData) {
      return;
    }

    const loadedUser = new UserModel(userData);

    if (userToken) {
      this.user.next(loadedUser);

      this.autoLogout(3600000);
    }
  }

  logout() {
    this.user.next(null);
    localStorage.clear();
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
    this.router.navigate(['/auth']);
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(userData: User, token: string) {
    const user = new UserModel(userData);

    this.user.next(user);
    this.autoLogout(3600000);

    localStorage.setItem('userData', JSON.stringify(user));
    localStorage.setItem('userToken', JSON.stringify(token));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.message) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.message) {
      case `E11000 duplicate key`:
        errorMessage = 'This email exists already';
        break;
      //! MAKE ENUMS FOR ERRORS
      case 'Incorrect email or password':
        errorMessage = 'This password or email is not correct.';
        break;
      default:
        errorMessage = 'An unknown error occurred!';
    }
    return throwError(errorMessage);
  }

  isAdmin() {
    const userRole = JSON.parse(localStorage.getItem('userData')!);

    return userRole.user.role === 'admin' ?? false;
  }
}
