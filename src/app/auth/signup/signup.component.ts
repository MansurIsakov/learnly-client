import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

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
    if (!this.signupForm.valid) {
      return;
    }

    const user: UserModel = new UserModel(this.signupForm.value);

    this.authService.signup(user, this.signupForm.value.password).subscribe(
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
}
