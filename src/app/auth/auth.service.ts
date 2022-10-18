import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  status: string;
  token: string;
  data: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login() {
    return this.http.get<AuthResponseData>(
      'http://localhost:3000/api/v1/auth/github'
    );
  }

  logout() {}
}
