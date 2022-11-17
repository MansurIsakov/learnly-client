import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ExamsComponent } from './exams/exams.component';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules/modules.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => {
      return import('./auth/auth.module').then((m) => m.AuthModule);
    },
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'profile/:id/edit',
    component: ProfileEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'teachers',
    loadChildren: () => {
      return import('./teachers/teachers.module').then((m) => m.TeachersModule);
    },
  },
  {
    path: 'modules',
    component: ModulesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'schedule-edit',
    component: ScheduleEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'exams',
    component: ExamsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
