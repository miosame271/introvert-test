import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './components/film-list/film-list.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SearchResultGuard } from './guards/search-result.guard';

const routes: Routes = [
  {
    path: 'film-list',
    component: FilmListComponent
  },
  {
    path: 'search-result',
    component: SearchResultComponent,
    canActivate: [SearchResultGuard]
  },
  {
    path: '',
    redirectTo: 'film-list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'film-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SearchResultGuard]
})
export class AppRoutingModule { }
