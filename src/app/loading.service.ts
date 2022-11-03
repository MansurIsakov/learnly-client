import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoadingService {
  private isLoading = new Subject();
  isLoading$: Observable<boolean> = of(false);

  constructor() {
    this.isLoading$.subscribe(this.isLoading);
  }

  activeSpinner() {
    this.isLoading.next(true);
  }

  deactiveSpinner() {
    this.isLoading.next(false);
  }
}
