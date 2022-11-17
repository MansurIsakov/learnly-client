import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import { IExam } from 'src/app/common/types/interfaces';
import { ExamsService } from 'src/app/exams/exams.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-exam-modal',
  templateUrl: './exam-modal.component.html',
  styleUrls: ['./exam-modal.component.scss'],
})
export class ExamModalComponent implements OnInit, OnDestroy {
  @Input() exam: IExam;
  @Output() closeModal = new EventEmitter();

  sub: Subscription[] = [];
  userModules: string[] = [];

  formMode: string = 'new';

  constructor(
    private examService: ExamsService,
    private dsService: DataStorageService
  ) {}

  ngOnInit(): void {
    this.sub.push(
      this.dsService.fetchUserModules().subscribe((modules) => {
        modules.map((module) => {
          this.userModules.push(module.moduleName);
        });
      })
    );

    if (this.exam) {
      this.formMode = 'edit';
    }
  }

  isNew(): boolean {
    return !this.exam;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    if (this.isNew()) {
      this.sub.push(
        this.examService.addExam(form.value).subscribe(() => {
          this.closeModal.emit();
        })
      );
    } else {
      this.sub.push(
        this.examService.updateExam(this.exam.id, form.value).subscribe(() => {
          this.closeModal.emit();
        })
      );
    }
  }

  ngOnDestroy(): void {
    if (this.sub.length > 0) {
      this.sub.forEach((sub) => {
        sub.unsubscribe();
      });
    }
  }
}
