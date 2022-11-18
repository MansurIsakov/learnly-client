import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ProfileComponent, canActivate: [AuthGuard] },
      {
        path: 'edit',
        component: ProfileEditComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
  exports: [ProfileComponent, ProfileEditComponent],
})
export class ProfileModule {}
