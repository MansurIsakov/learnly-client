import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { UserModel } from '../models/user.model';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  error: string = null;
  isLoginMode: boolean = true;
  subscription: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onHandleError() {
    this.error = null;
  }

  onSubmit(form: FormGroup) {
    if (!form.valid) {
      return;
    }

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(form.value.email, form.value.password);
    } else {
      const user: UserModel = new UserModel(form.value.userData);

      authObs = this.authService.signup(user, form.value.password);
    }

    this.subscription = authObs.subscribe(
      (resData) => {
        this.router.navigate(['/home']);
      },
      (errorMessage) => {
        this.error = errorMessage;
      }
    );

    form.reset();
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
