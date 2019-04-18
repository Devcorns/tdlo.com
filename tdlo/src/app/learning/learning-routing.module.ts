import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LearningTryComponent } from './learning-try/learning-try.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';




const routes: Routes = [
  
  {path:"ltc", component:LearningTryComponent},
  {path:"custom-directive", component:CustomDirectiveComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LearningRoutingModule {
  
 }
