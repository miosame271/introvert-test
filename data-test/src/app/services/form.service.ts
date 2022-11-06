import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FilterFields } from '../interfaces/filter-fields';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private form: FormGroup = this.initForm();

  get searchForm(): FormGroup {
    return this.form;
  }

  constructor(private fb: FormBuilder) { }

  private initForm(): FormGroup {
    return this.fb.group<FilterFields>({
      title: '',
      year: null
    });
  }
}
