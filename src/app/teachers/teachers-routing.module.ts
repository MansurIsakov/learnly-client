import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { TeachersDetailComponent } from './teachers-detail/teachers-detail.component';
import { TeachersStartComponent } from './teachers-start/teachers-start.component';
import { TeachersComponent } from './teachers.component';

const routes: Routes = [
  {
    path: '',
    component: TeachersComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: TeachersStartComponent },
      { path: ':id', component: TeachersDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
