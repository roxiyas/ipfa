import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesComponent } from './reportes.component';
import { ReportesRoutingModule } from './reportes-routing.module';
import { MaterialModule } from '@app/material.module';
import { SolvenciaModule } from './solvencia/solvencia.module';
import { SolvenciaTrModule } from './solvencia-tr/solvencia-tr.module';
import { NetoTitularModule } from './neto-titular/neto-titular.module';
import { AutMedicamentosModule } from './aut-medicamentos/aut-medicamentos.module';
import { AfiliacionModule } from './afiliacion/afiliacion.module';



@NgModule({
  declarations: [
    ReportesComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    MaterialModule,
    SolvenciaModule,
    SolvenciaTrModule,
    NetoTitularModule,
    AutMedicamentosModule,
    AfiliacionModule
  ]
})
export class ReportesModule { }
