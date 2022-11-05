import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { API_KEY } from '../providers/providers';
import { ErrorHandlingService } from '../services/error-handling.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(
    @Inject(API_KEY) private apiKey: string,
    private errorHandlingService: ErrorHandlingService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = req.clone({
      url: `${req.url}${this.apiKey}/`,
      params: req.params
    });

    return next.handle(newRequest).pipe(
      catchError(err => this.errorHandlingService.handleError<HttpEvent<any>>(err))
    )
  }

}
