import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ScheduleDaysComponent } from '../schedule-edit/schedule-days/schedule-days.component';
import { ScheduleEditItemComponent } from '../schedule-edit/schedule-edit-list/schedule-edit-list/schedule-edit-item/schedule-edit-item.component';
import { ScheduleEditListComponent } from '../schedule-edit/schedule-edit-list/schedule-edit-list/schedule-edit-list.component';
import { ScheduleEditComponent } from '../schedule-edit/schedule-edit.component';
import { SharedModule } from '../shared/shared.module';
import { ScheduleItemComponent } from './schedule-list/schedule-item/schedule-item.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleComponent } from './schedule.component';

@NgModule({
  declarations: [
    ScheduleComponent,
    ScheduleListComponent,
    ScheduleItemComponent,
    ScheduleEditComponent,
    ScheduleEditListComponent,
    ScheduleEditItemComponent,
    ScheduleDaysComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: ScheduleComponent, canActivate: [AuthGuard] },
      {
        path: 'edit',
        component: ScheduleEditComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
  exports: [
    ScheduleComponent,
    ScheduleListComponent,
    ScheduleItemComponent,
    ScheduleEditComponent,
    ScheduleEditListComponent,
    ScheduleEditItemComponent,
    ScheduleDaysComponent,
  ],
})
export class ScheduleModule {}
