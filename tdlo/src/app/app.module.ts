import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CommonComponentsComponent } from './common-components/common-components.component';
import { ComapnyProfileComponent } from './comapny-profile/comapny-profile.component';
import { ComapnyEmployeeComponent } from './comapny-employee/comapny-employee.component';
import { GoodEmployeeComponent } from './good-employee/good-employee.component';
import { WorstEmployeeComponent } from './worst-employee/worst-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CommonComponentsComponent,
    ComapnyProfileComponent,
    ComapnyEmployeeComponent,
    GoodEmployeeComponent,
    WorstEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
