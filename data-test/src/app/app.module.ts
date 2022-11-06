import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterResultComponent } from './components/filter-result/filter-result.component';
import { FilterSearchComponent } from './components/filter-search/filter-search.component';
import { DataService } from './services/data.service';
import { ErrorHandlingService } from './services/error-handling.service';
import { InterceptorService } from './http-interceptors/interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
import { FormService } from './services/form.service';

@NgModule({
  declarations: [
    AppComponent,
    FilterSearchComponent,
    FilterResultComponent
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
    SearchService,
    FormService,
    ErrorHandlingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
