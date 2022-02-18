import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StopwatchModule} from "./stopwatch/stopwatch.module";
import {SectionComponent} from "./section.component";



@NgModule({
  declarations: [
    SectionComponent
  ],

  exports: [
    SectionComponent
  ],

  imports: [
    CommonModule,
    StopwatchModule
  ]
})
export class SectionModule { }
