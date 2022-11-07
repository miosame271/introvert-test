import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, Observable, of, take, tap } from 'rxjs';
import { trackByFilmId } from 'src/app/helpers/helpers';
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

  trackByFilmId = trackByFilmId;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.filteredList$ = combineLatest([
      this.activatedRoute.queryParams.pipe(take(1)),
      this.top250$.pipe(take(1))
    ]).pipe(
      map(([queryParams, films]) => this.filterFilms(queryParams as FilterFields, films))
    )

    this.filteredList$.subscribe(() => this.loading$.next(false))
  }

  goBack(): void {
    this.router.navigateByUrl('film-list');
  }

  private filterFilms({ title, year }: FilterFields, films: Film[]): Film[] {
    return films.filter(film => {
      const includesTitle = !!title ? film.title.toLowerCase().includes(title.toLowerCase()) : true;
      const includesYear = !!year ? film.year.toLowerCase().includes(year.toString().toLowerCase()) : true;

      return includesTitle && includesYear;
    })
  }
}
