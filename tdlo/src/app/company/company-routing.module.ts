import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyMainComponent } from './company-main/company-main.component';


const routes: Routes = [
  {path:"", component:CompanyMainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
