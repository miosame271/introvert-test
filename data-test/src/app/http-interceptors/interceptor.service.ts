import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  private readonly apiUrl: string = 'https://imdb-api.com/API/';
  private readonly apiKey: string = 'k_2t7dp9bq';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newRequest = req.clone({
      url: `${this.apiUrl}${req.url}${this.apiKey}/`,
      params: req.params
    });

    return next.handle(newRequest);
  }

}
