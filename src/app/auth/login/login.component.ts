import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { restrictedEmails } from 'src/app/common/validators/restrictedEmails';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        restrictedEmails,
      ]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    this.subscription = this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (resData) => {
          this.router.navigate(['/']);
        },
        (errorMessage) => {
          console.log(errorMessage);
        }
      );

    this.loginForm.reset();
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
