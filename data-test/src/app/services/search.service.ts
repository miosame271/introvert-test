import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Film } from '../interfaces/film';
import { FilterFields } from '../interfaces/filter-fields';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResult$: Observable<Film[]> = of([]);

  constructor(private dataService: DataService) { }

  search(filters: FilterFields): void {
    this.searchResult$ = this.dataService.searchData(filters);
  }
}
