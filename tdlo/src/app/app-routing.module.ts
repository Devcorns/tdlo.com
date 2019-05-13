import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanySearchListComponent } from './home/company-search-list/company-search-list.component';



const routes: Routes = [
  {path:"auth", loadChildren:"./auth/auth.module#AuthModule"},
  {path:"learn", loadChildren:"./learning/learning.module#LearningModule"},
  {path:"user", loadChildren:"./user/user.module#UserModule"},
  {path:"", component: HomeComponent, children:[
    {path: "", component:CompanySearchListComponent},
    {path:"company", loadChildren:"./company/company.module#CompanyModule"}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
