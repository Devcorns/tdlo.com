import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyMainComponent } from './company-main/company-main.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyLayoutComponent } from '../layout/company-layout/company-layout.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';


const routes: Routes = [
  
  {
    path:"",component:CompanyLayoutComponent, children: [
      {path:"add-company", component:AddCompanyComponent},
      {path:":id", component:CompanyProfileComponent},
    ]
  },
  
  
  //{path:"add-comapany", component:AddCompanyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
