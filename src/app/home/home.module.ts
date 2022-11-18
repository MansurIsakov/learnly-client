import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ScheduleModule } from '../schedule/schedule.module';
import { SharedModule } from '../shared/shared.module';
import { GoalsWidgetComponent } from './goals-widget/goals-widget.component';
import { HomeComponent } from './home.component';
import { UniWidgetComponent } from './uni-widget/uni-widget.component';

@NgModule({
  declarations: [UniWidgetComponent, GoalsWidgetComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    ]),
  ],
  exports: [UniWidgetComponent, GoalsWidgetComponent, HomeComponent],
})
export class HomeModule {}
