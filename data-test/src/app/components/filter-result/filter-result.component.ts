import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { Film } from 'src/app/interfaces/film';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterResultComponent implements OnInit, OnDestroy {
  list$: Observable<Film[]> = of([]);
  private destroy$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.dataService.searchData({
    //   title: 'House',
    //   year: '1999'
    // }).subscribe(data => console.log('searchData', data))
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  trackByFilmId(_: any, film: Film): string {
    return film.id;
  }

}
