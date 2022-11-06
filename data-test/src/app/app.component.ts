import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'data-test';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // this.dataService.getTop250().subscribe(data => console.log('top 250', data))
  }
}
