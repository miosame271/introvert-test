import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { Film } from '../interfaces/film';
import { FilterFields } from '../interfaces/filter-fields';
import { ErrorHandlingService } from './error-handling.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly apiUrl: string = 'https://imdb-api.com/API/';

  constructor(
    private httpClient: HttpClient,
    private errorHandlingService: ErrorHandlingService
  ) {
  }

  getTop250(): Observable<Film[]> {
    return this.performRequest(`${this.apiUrl}Top250Movies/`).pipe(
      switchMap((data: any) => {
        if (data.errorMessage) {
          throw new Error(data.errorMessage);
        }
        return of(this.formatFilmList(data.items))
      }),
      catchError(err => this.errorHandlingService.handleError<Film[]>(err, []))
    )
  }

  searchData(filters: FilterFields): Observable<Film[]> {
    const params = this.createParamsFromFilters(filters);

    return this.performRequest(`${this.apiUrl}AdvancedSearch/`, params).pipe(
      switchMap((data: any) => {
        if (data.errorMessage) {
          throw new Error(data.errorMessage);
        }
        return of(this.formatFilmList(data.results || []))
      }),
      catchError(err => this.errorHandlingService.handleError<Film[]>(err, []))
    )
  }

  private formatFilmList(list: any): Film[] {
    return list.map((film: any) => {
      return {
        id: film['id'] || '',
        title: film['title'] || '',
        year: film['description'] || '',
        imDbRating: film['imDbRating'] || ''
      }
    });
  }

  private createParamsFromFilters(filters: FilterFields): HttpParams {
    let params = new HttpParams();

    params = params.append('title', filters.title || '');
    params = params.append('year', filters.year || '');

    return params;
  }

  private performRequest(url: string, params?: HttpParams): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(url, { params });
  }
}

