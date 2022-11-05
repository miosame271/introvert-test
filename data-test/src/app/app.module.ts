import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterResultComponent } from './components/filter-result/filter-result.component';
import { FilterSearchComponent } from './components/filter-search/filter-search.component';
import { FilterComponent } from './components/filter/filter.component';
import { API_KEY, API_URL } from './providers/providers';
import { DataService } from './services/data.service';
import { ErrorHandlingService } from './services/error-handling.service';
import { InterceptorService } from './http-interceptors/interceptor.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterSearchComponent,
    FilterResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: 'https://imdb-api.com/API/'
    },
    {
      provide: API_KEY,
      useValue: 'k_2t7dp9bq'
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    DataService,
    ErrorHandlingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
