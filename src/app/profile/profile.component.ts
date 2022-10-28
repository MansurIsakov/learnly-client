import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models/user.model';
import { ProfileService } from './profile.service';
import { formatConstant } from '../common/helpers/formatConstant';
import { LEVELS } from '../common/constants/levels.const';
import { COURSES } from '../common/constants/courses.const';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  isLoading: boolean = false;
  user: IUser;
  userId = JSON.parse(localStorage.getItem('userData')!)._id;
  formatConstant;
  levelsConst = LEVELS;
  coursesConst = COURSES;
  error: string = null;

  constructor(
    private profileService: ProfileService,
    private router: Router,
    private authService: AuthService
  ) {
    this.formatConstant = formatConstant;
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.profileService.getProfile(this.userId).subscribe((user) => {
      this.user = user.results;
      this.isLoading = false;
    });
  }

  deleteAccount(id: string) {
    this.profileService.deleteProfile(id).subscribe();
    localStorage.clear();
    this.router.navigate(['/auth']);
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }

  onHandleError() {
    this.error = null;
  }
}
