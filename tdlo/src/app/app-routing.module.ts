import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:"auth", loadChildren:"./auth/auth.module#AuthModule"},
  {path:"learn", loadChildren:"./learning/learning.module#LearningModule"},
  {path:"company", loadChildren:"./company/company.module#CompanyModule"},
  {path:"user", loadChildren:"./user/user.module#UserModule"},
  {path:"", component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
