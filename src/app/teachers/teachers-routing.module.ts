import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { TeachersDetailComponent } from './teachers-detail/teachers-detail.component';
import { TeachersResolverService } from './teachers-resolver.service';
import { TeachersStartComponent } from './teachers-start/teachers-start.component';
import { TeachersComponent } from './teachers.component';

const routes: Routes = [
  {
    path: '',
    component: TeachersComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: TeachersStartComponent,
        resolve: [TeachersResolverService],
      },
      {
        path: ':id',
        component: TeachersDetailComponent,
        resolve: [TeachersResolverService],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeachersRoutingModule {}
