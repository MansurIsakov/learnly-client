import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  course = 'BM';
  isLoginMode: boolean = true;
  authForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  private initForm() {
    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';
    let course = 'BIS';
    let level = 3;

    this.authForm = new FormGroup({
      firstName: new FormControl(firstName),
      lastName: new FormControl(lastName),
      email: new FormControl(email, [Validators.required, Validators.email]),
      password: new FormControl(password, [
        Validators.required,
        Validators.minLength(6),
      ]),
      course: new FormControl(course),
      level: new FormControl(level),
    });
  }

  onSubmit() {
    if (!this.authForm.valid) {
      return;
    }

    let authObs: Observable<AuthResponseData>;
    if (this.isLoginMode) {
      authObs = this.authService.login(
        this.authForm.value.email,
        this.authForm.value.password
      );
    } else {
      authObs = this.authService.signup(
        this.authForm.value.firstName,
        this.authForm.value.lastName,
        this.authForm.value.course,
        this.authForm.value.level,
        this.authForm.value.email,
        this.authForm.value.password
      );
    }
    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.router.navigate(['/']);
      },
      (errorMessage) => {
        console.log(errorMessage);
      }
    );

    this.authForm.reset();
  }
}
