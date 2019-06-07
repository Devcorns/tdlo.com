import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyMainComponent } from './company-main/company-main.component';
import { AddCompanyComponent } from './add-company/add-company.component';


const routes: Routes = [
  {path:":id", component:CompanyMainComponent},
  {path:"add-comapany", component:AddCompanyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
