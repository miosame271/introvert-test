import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchResultGuard } from './guards/search-result.guard';

const routes: Routes = [
  {
    path: 'search-form',
    component: SearchFormComponent
  },
  {
    path: 'search-result',
    component: SearchResultComponent,
    canActivate: [SearchResultGuard]
  },
  {
    path: '',
    redirectTo: 'search-form',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'search-form',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SearchResultGuard]
})
export class AppRoutingModule { }
