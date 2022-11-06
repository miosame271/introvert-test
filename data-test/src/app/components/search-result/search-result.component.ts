import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable, of, tap } from 'rxjs';
import { Film } from 'src/app/interfaces/film';
import { FilterFields } from 'src/app/interfaces/filter-fields';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent implements OnInit {
  top250$: Observable<Film[]> = this.dataService.top250$;
  filteredList$: Observable<Film[]> = of([]);

  loading$ = new BehaviorSubject<boolean>(true);

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.filteredList$ = combineLatest([this.activatedRoute.queryParams, this.top250$]).pipe(
      map(([queryParams, films]) => this.filterFilms(queryParams as FilterFields, films))
    )

    this.filteredList$.subscribe(() => this.loading$.next(false))
  }

  trackByFilmId(_: any, film: Film): string {
    return film.id;
  }

  goBack(): void {
    this.router.navigateByUrl('search-form');
  }

  private filterFilms({ title, year }: FilterFields, films: Film[]): Film[] {
    return films.filter(film => {
      const includesTitle = !!title ? film.title.toLowerCase().includes(title.toLowerCase()) : true;
      const includesYear = !!year ? film.year.toLowerCase().includes(year.toString().toLowerCase()) : true;

      return includesTitle && includesYear;
    })
  }
}
