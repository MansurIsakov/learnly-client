import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { ExamModalComponent } from '../modals/exam-modal/exam-modal.component';
import { SharedModule } from '../shared/shared.module';
import { ExamsItemComponent } from './exams-item/exams-item.component';
import { ExamsComponent } from './exams.component';

@NgModule({
  declarations: [ExamsComponent, ExamsItemComponent, ExamModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: ExamsComponent, canActivate: [AuthGuard] },
    ]),
  ],
  exports: [ExamsComponent, ExamsItemComponent, ExamModalComponent],
})
export class ExamsModule {}
