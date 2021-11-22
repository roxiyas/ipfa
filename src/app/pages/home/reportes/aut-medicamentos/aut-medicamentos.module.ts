import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';
import { AutMedicamentosComponent } from './aut-medicamentos.component';
import { AutMedicamentosRoutingModule } from './aut-medicamentos-routing.module';

@NgModule({
  declarations: [
    AutMedicamentosComponent
  ],
  imports: [
    CommonModule,
    AutMedicamentosRoutingModule,
    MaterialModule
  ],
  exports: [AutMedicamentosComponent],
})
export class AutMedicamentosModule { }