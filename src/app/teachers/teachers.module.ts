import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TeachersDetailComponent } from './teachers-detail/teachers-detail.component';
import { TeachersItemComponent } from './teachers-list/teachers-item/teachers-item.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersStartComponent } from './teachers-start/teachers-start.component';
import { TeachersComponent } from './teachers.component';

@NgModule({
  declarations: [
    TeachersComponent,
    TeachersDetailComponent,
    TeachersListComponent,
    TeachersStartComponent,
    TeachersItemComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, TeachersRoutingModule],
  exports: [
    TeachersComponent,
    TeachersDetailComponent,
    TeachersListComponent,
    TeachersStartComponent,
    TeachersItemComponent,
  ],
})
export class TeachersModule {}
