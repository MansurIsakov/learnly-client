import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { isEmpty } from '../common/helpers/isEmpty';
import { IExam } from '../common/types/interfaces';
import { ExamsService } from './exams.service';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
})
export class ExamsComponent implements OnInit, OnDestroy {
  exams$: Observable<IExam[]>;
  sub: Subscription;
  isEmpty = isEmpty;
  exam: IExam;
  page: number = 1;

  isModalActive: boolean = false;

  constructor(private examService: ExamsService) {}

  ngOnInit(): void {
    this.sub = this.examService.getExams().subscribe(() => {
      this.exams$ = this.examService.exams$;
    });
  }

  onOpenModal() {
    this.isModalActive = true;
  }

  onClose() {
    this.exam = null;
    this.isModalActive = false;
  }

  onEditExam(exam: IExam) {
    this.exam = exam;
    this.isModalActive = true;
  }

  startIndex(): number {
    return (this.page - 1) * 5;
  }

  endIndex(): number {
    return this.page * 5;
  }

  hasNextPage(exams: IExam[]): boolean {
    return this.endIndex() < exams.length;
  }

  paginatedExamsList(exams: IExam[]): IExam[] {
    return exams.slice(this.startIndex(), this.endIndex());
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
