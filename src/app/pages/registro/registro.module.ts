import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { MaterialModule } from '@app/material.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
RegistroComponent,
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    MaterialModule,
    MatDialogModule

  ]
})
export class RegistroModule { }
