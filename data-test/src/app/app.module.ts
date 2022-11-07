import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { ErrorHandlingService } from './services/error-handling.service';
import { InterceptorService } from './http-interceptors/interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { FilmListComponent } from './components/film-list/film-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    SearchFormComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    DataService,
    ErrorHandlingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
