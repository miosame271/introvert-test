import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeLast, takeUntil } from 'rxjs';
import { Film } from 'src/app/interfaces/film';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterResultComponent implements OnInit, OnDestroy {
  list$: Observable<Film[] | null> | undefined;
  private destroy$ = new Subject();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.searchData({
      title: 'House',
      year: '1999'
    }).subscribe(data => console.log('searchData', data))
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  trackByFilmId(_: any, film: Film): string {
    return film.id;
  }

}
