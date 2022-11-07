import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, take } from 'rxjs';
import { trackByFilmId } from 'src/app/helpers/helpers';
import { Film } from 'src/app/interfaces/film';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmListComponent implements OnInit {
  top250$: Observable<Film[]> = this.dataService.top250$.pipe(take(1));
  loading$ = new BehaviorSubject<boolean>(true);

  trackByFilmId = trackByFilmId;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.top250$.subscribe(() => this.loading$.next(false));
  }

}
