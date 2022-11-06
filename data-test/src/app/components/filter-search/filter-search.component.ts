import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSearchComponent {
  searchForm: FormGroup = this.formService.searchForm;

  constructor(private formService: FormService, private searchService: SearchService) { }

  onSubmit() {
    this.searchService.search(this.searchForm.value);
    debugger
  }

}
