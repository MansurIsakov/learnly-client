import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { LoaderService } from '../shared/loading-spinner/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  totalRequests = 0;
  completedRequest = 0;

  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show();
    this.totalRequests++;

    return next.handle(request).pipe(
      finalize(() => {
        this.completedRequest++;
        if (this.totalRequests === this.completedRequest) {
          this.loaderService.hide();
          this.completedRequest = 0;
          this.totalRequests = 0;
        }
      })
    );
  }
}
