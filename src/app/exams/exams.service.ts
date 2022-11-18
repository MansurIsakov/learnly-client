import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ExamErrorCode } from '../common/types/errors';
import { IExam, ResponseData } from '../common/types/interfaces';

@Injectable({ providedIn: 'root' })
export class ExamsService {
  private readonly _exams = new BehaviorSubject<IExam[]>(null);
  readonly exams$ = this._exams.asObservable();

  get examsData(): IExam[] {
    return this._exams.getValue();
  }

  set examsData(exams: IExam[]) {
    this._exams.next(exams);
  }

  constructor(private http: HttpClient) {}

  getExams() {
    return this.http
      .get<ResponseData<IExam[]>>(environment.API_ENDPOINT + '/exams')
      .pipe(
        map((resData) => {
          this.examsData = resData.results;
          return resData.results;
        }),
        catchError(this.handleError)
      );
  }

  addExam(examData: IExam) {
    return this.http
      .post<ResponseData<IExam[]>>(
        environment.API_ENDPOINT + '/exams',
        examData
      )
      .pipe(
        map((resData) => {
          this.examsData = resData.results;
        }),
        catchError(this.handleError)
      );
  }

  updateExam(examId: string, examData: IExam) {
    return this.http
      .put<ResponseData<IExam[]>>(
        environment.API_ENDPOINT + '/exams/' + examId,
        examData
      )
      .pipe(
        map((resData) => {
          this.examsData = resData.results;
        }),
        catchError(this.handleError)
      );
  }

  deleteExam(examId: string) {
    return this.http
      .delete<ResponseData<IExam[]>>(
        environment.API_ENDPOINT + '/exams/' + examId
      )
      .pipe(
        map((resData) => {
          this.examsData = this.examsData.filter((exam) => exam.id !== examId);
        }),
        catchError(this.handleError)
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (!errorRes.error || !errorRes.error.code) {
      return throwError(errorMessage);
    }

    switch (errorRes.error.code) {
      case ExamErrorCode.EXAM_ALREADY_EXISTS:
        errorMessage = errorRes.error.message;
        break;
      case ExamErrorCode.EXAM_NOT_FOUND:
        errorMessage = errorRes.error.message;
        break;
      default:
        errorMessage = 'An unknown error occurred!';
    }
    return throwError(errorMessage);
  }
}
