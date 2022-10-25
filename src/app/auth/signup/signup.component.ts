import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  signupForm: FormGroup;
  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let firstName = '';
    let lastName = '';
    let email = '';
    let password = '';
    let course = 'BIS';
    let level = 3;

    this.signupForm = new FormGroup({
      firstName: new FormControl(firstName, Validators.required),
      lastName: new FormControl(lastName, Validators.required),
      email: new FormControl(email, [Validators.required, Validators.email]),
      password: new FormControl(password, [
        Validators.required,
        Validators.minLength(6),
      ]),
      course: new FormControl(course, Validators.required),
      level: new FormControl(level, Validators.required),
    });
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }

    const user: UserModel = new UserModel(this.signupForm.value);

    this.subscription = this.authService
      .signup(user, this.signupForm.value.password)
      .subscribe(
        (resData) => {
          console.log(resData);
          this.router.navigate(['/']);
        },
        (errorMessage) => {
          console.log(errorMessage);
        }
      );

    this.signupForm.reset();
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
