import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { BehaviorSubject, catchError, tap, throwError } from 'rxjs';

export interface AuthResponseData {
  status: string;
  token: string;
  data: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  role: string | undefined;
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient, private router: Router) {}

  signup(
    firstName: string,
    lastName: string,
    course: string,
    level: number,
    email: string,
    password: string
  ) {
    return this.http
      .post<AuthResponseData>('http://localhost:3000/api/v1/auth/signup', {
        firstName,
        lastName,
        course,
        level,
        email,
        password,
        passwordConfirm: password,
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.role = resData.data.user.role;

          this.handleAuthentication(
            resData.data.user.email,
            resData.data.user._id,
            resData.data.user._token,
            resData.data.user.firstName,
            resData.data.user.lastName,
            resData.data.user.role,
            resData.data.user.level,
            resData.data.user.course
          );
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

          this.handleAuthentication(
            resData.data.user.email,
            resData.data.user._id,
            resData.data.user._token,
            resData.data.user.firstName,
            resData.data.user.lastName,
            resData.data.user.role,
            resData.data.user.level,
            resData.data.user.course
          );
        })
      );
  }

  autoLogin() {
    const userData = JSON.parse(localStorage.getItem('userData')!);

    if (!userData) {
      return;
    }

    const loadedUser = new User({
      _id: userData.user._id,
      _token: userData.user._token,
      firstName: userData.user.firstName,
      lastName: userData.user.lastName,
      email: userData.user.email,
      role: userData.user.role,
      level: userData.user.level,
      course: userData.user.course,
    });

    if (loadedUser.token) {
      this.user.next(loadedUser);

      this.autoLogout(3600000);
    }
  }

  logout() {
    this.user.next(null!);
    this.router.navigate(['/']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    firstName: string,
    lastName: string,
    role: string,
    level: number,
    course: string
  ) {
    const user = new User({
      _id: userId,
      _token: token,
      firstName,
      lastName,
      email,
      role,
      level,
      course,
    });

    this.user.next(user);
    this.autoLogout(3600000);

    localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.message) {
      case `E11000 duplicate key`:
        errorMessage = 'This email exists already';
        break;
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
