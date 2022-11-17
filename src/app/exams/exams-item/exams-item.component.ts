import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { IExam } from 'src/app/common/types/interfaces';
import { ExamsService } from '../exams.service';

@Component({
  selector: 'app-exams-item',
  templateUrl: './exams-item.component.html',
  styleUrls: ['./exams-item.component.scss'],
})
export class ExamsItemComponent implements OnInit, OnDestroy {
  @Input() exam: IExam;
  @Output() editExam = new EventEmitter();
  sub: Subscription;

  constructor(private examService: ExamsService) {}

  ngOnInit(): void {}

  onEditExam() {
    this.editExam.emit(this.exam);
  }

  onExamDelete(examId: string) {
    this.sub = this.examService.deleteExam(examId).subscribe();
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
