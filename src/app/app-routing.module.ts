import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ExamsComponent } from './exams/exams.component';
import { HomeComponent } from './home/home.component';
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
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => {
      return import('./auth/auth.module').then((m) => m.AuthModule);
    },
  },
  {
    path: 'profile/:id',
    loadChildren: () => {
      return import('./profile/profile.module').then((m) => m.ProfileModule);
    },
  },
  {
    path: 'teachers',
    loadChildren: () => {
      return import('./teachers/teachers.module').then((m) => m.TeachersModule);
    },
  },
  {
    path: 'modules',
    loadChildren: () => {
      return import('./modules/modules.module').then((m) => m.ModulesModule);
    },
  },
  {
    path: 'schedule',
    loadChildren: () => {
      return import('./schedule/schedule.module').then((m) => m.ScheduleModule);
    },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'exams',
    loadChildren: () => {
      return import('./exams/exams.module').then((m) => m.ExamsModule);
    },
  },
  {
    path: 'tasks',
    loadChildren: () => {
      return import('./tasks/tasks.module').then((m) => m.TasksModule);
    },
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
