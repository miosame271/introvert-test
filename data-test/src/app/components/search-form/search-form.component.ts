import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FilterFields } from 'src/app/interfaces/filter-fields';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponent {
  searchForm: FormGroup = this.fb.group<FilterFields>({
    title: '',
    year: null
  });

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  onSubmit() {
    this.router.navigate(['/search-result'], {
      queryParams: this.searchForm.value
    });
  }
}
