import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyEmployeeComponent } from './company-employee/company-employee.component';
import { GoodEmployeeComponent } from './good-employee/good-employee.component';
import { WorstEmployeeComponent } from './worst-employee/worst-employee.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyMainComponent } from './company-main/company-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

@NgModule({
  declarations: [CompanyProfileComponent, CompanyEmployeeComponent, GoodEmployeeComponent, WorstEmployeeComponent, CompanyMainComponent, SearchEmployeeComponent, AddEmployeeComponent, ViewEmployeeComponent],
  imports: [
    CommonModule,
    FormsModule ,
    CompanyRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
