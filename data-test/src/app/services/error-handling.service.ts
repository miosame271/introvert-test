import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {
  handleError<T>(err: Error, fallbackResult?: T): Observable<T> {
    console.error(err);

    return fallbackResult ? of(fallbackResult) : EMPTY;
  }
}
