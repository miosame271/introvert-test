import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, shareReplay, switchMap, take } from 'rxjs';
import { formatFilmList } from '../helpers/helpers';
import { Film } from '../interfaces/film';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  top250$: Observable<Film[]> = this.getTop250().pipe(
    take(1),
    shareReplay(1)
  );

  constructor(
    private httpClient: HttpClient,
    private errorHandlingService: ErrorHandlingService
  ) {
  }

  private getTop250(): Observable<Film[]> {
    return this.httpClient.get<any>('Top250Movies/').pipe(
      switchMap((data: any) => {
        if (data.errorMessage) {
          throw new Error(data.errorMessage);
        }
        return of(formatFilmList(data.items))
      }),
      catchError(err => this.errorHandlingService.handleError<Film[]>(err, []))
    )
  }
}

