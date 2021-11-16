import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolvenciaComponent } from './solvencia.component';
import { MaterialModule } from '@app/material.module';
import { SolvenciaRoutingModule } from './solvencia-routing.module';




@NgModule({
  declarations: [
    SolvenciaComponent
  ],
  imports: [
    CommonModule,
    SolvenciaRoutingModule,
    MaterialModule
  ],
  exports: [SolvenciaComponent],
})
export class SolvenciaModule { }