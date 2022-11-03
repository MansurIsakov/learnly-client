import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { restrictedEmails } from 'src/app/common/validators/restrictedEmails';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  activePassword: boolean = false;
  @Output() onEmitSubmit = new EventEmitter<FormGroup>();

  constructor() {}

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

  togglePassword() {
    this.activePassword = !this.activePassword;
  }

  onSubmit() {
    this.onEmitSubmit.emit(this.loginForm);
  }
}
