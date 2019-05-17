import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyEmployeeComponent } from './company-employee/company-employee.component';
import { GoodEmployeeComponent } from './good-employee/good-employee.component';
import { WorstEmployeeComponent } from './worst-employee/worst-employee.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyMainComponent } from './company-main/company-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CompanyProfileComponent, CompanyEmployeeComponent, GoodEmployeeComponent, WorstEmployeeComponent, CompanyMainComponent],
  imports: [
    CommonModule,
    FormsModule ,
    CompanyRoutingModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
