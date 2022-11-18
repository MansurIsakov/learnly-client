import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { TasksModalComponent } from '../modals/tasks-modal/tasks-modal.component';
import { SharedModule } from '../shared/shared.module';
import { TasksItemComponent } from './tasks-item/tasks-item.component';
import { TasksSearchBarComponent } from './tasks-search-bar/tasks-search-bar.component';
import { TasksComponent } from './tasks.component';

@NgModule({
  declarations: [
    TasksComponent,
    TasksItemComponent,
    TasksSearchBarComponent,
    TasksModalComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: '', component: TasksComponent, canActivate: [AuthGuard] },
    ]),
  ],
  exports: [
    TasksComponent,
    TasksItemComponent,
    TasksSearchBarComponent,
    TasksModalComponent,
  ],
})
export class TasksModule {}
