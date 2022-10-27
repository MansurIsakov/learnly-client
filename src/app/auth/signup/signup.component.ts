import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { restrictedEmails } from 'src/app/common/validators/restrictedEmails';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  @Output() onEmitSubmit = new EventEmitter<FormGroup>();

  constructor() {}

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
    this.onEmitSubmit.emit(this.signupForm);
  }
}
