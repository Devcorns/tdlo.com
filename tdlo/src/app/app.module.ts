import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonComponentsComponent } from './common-components/common-components.component';
import { CompanyModule } from './company/company.module';
import { CompanySearchListComponent } from './home/company-search-list/company-search-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommonComponentsComponent,
    CompanySearchListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CompanyModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
