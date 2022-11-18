import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { SettingsComponent } from './settings/settings.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
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
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
