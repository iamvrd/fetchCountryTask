import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from 'src/app/app.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AddedCountryComponent } from './added-country/added-country.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AddedCountryComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'addedCountries', component: AddedCountryComponent }
    ]),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
