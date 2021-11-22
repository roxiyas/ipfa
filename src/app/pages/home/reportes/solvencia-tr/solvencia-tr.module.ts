import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolvenciaTrComponent } from './solvencia-tr.component';
import { MaterialModule } from '@app/material.module';
import { SolvenciaTrRoutingModule } from './solvencia-tr-routing.module';




@NgModule({
  declarations: [
    SolvenciaTrComponent
  ],
  imports: [
    CommonModule,
    SolvenciaTrRoutingModule,
    MaterialModule
  ],
  exports: [SolvenciaTrComponent],
})
export class SolvenciaTrModule { }