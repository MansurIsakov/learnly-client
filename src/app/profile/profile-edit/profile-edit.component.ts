import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MONTHS } from 'src/app/common/constants/months.const';
import { formatConstant } from 'src/app/common/helpers/formatConstant';
import { restrictedEmails } from 'src/app/common/validators/restrictedEmails';
import { IUser } from 'src/app/models/user.model';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss'],
})
export class ProfileEditComponent implements OnInit {
  isLoading: boolean = false;
  userId = JSON.parse(localStorage.getItem('userData')!)._id;
  user: IUser;
  editForm: FormGroup;
  formatConstant;
  monthsConst = MONTHS;

  constructor(private profileService: ProfileService) {
    this.formatConstant = formatConstant;
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.initForm();

    this.isLoading = false;
  }

  private initForm() {
    let userData: IUser; //! get user data from profile service

    const userDob = userData.dob.split('-');

    this.editForm = new FormGroup({
      emoji: new FormControl(userData.emoji, Validators.required),
      firstName: new FormControl(userData.firstName, Validators.required),
      lastName: new FormControl(userData.lastName, Validators.required),
      email: new FormControl(userData.email, Validators.required),
      dobData: new FormGroup({
        dobDay: new FormControl(userDob[2], Validators.required),
        dobMonth: new FormControl(userDob[1], Validators.required),
        dobYear: new FormControl(userDob[0], Validators.required),
      }),
    });
  }

  onSubmit() {}
}
