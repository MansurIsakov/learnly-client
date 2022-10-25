import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { restrictedEmails } from 'src/app/common/validators/restrictedEmails';
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
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        firstName: new FormControl(null, Validators.required),
        lastName: new FormControl(null, Validators.required),
        course: new FormControl('BIS', Validators.required),
        level: new FormControl(3, Validators.required),
        email: new FormControl(null, [
          Validators.required,
          Validators.email,
          restrictedEmails,
        ]),
      }),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    if (!this.signupForm.valid) {
      return;
    }

    const user: UserModel = new UserModel(this.signupForm.value.userData);

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
