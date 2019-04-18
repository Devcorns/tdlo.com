import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningTryComponent } from './learning-try/learning-try.component';
import { LearningRoutingModule } from './learning-routing.module';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { ColorDirective } from './directives/color.directive';
import { BoldStringPipe } from './pipe/bold-string.pipe';

@NgModule({
  declarations: [LearningTryComponent, CustomDirectiveComponent, ColorDirective, BoldStringPipe],
  imports: [
    CommonModule,
    LearningRoutingModule
  ]
})
export class LearningModule { }
