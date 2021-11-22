import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';
import { AfiliacionComponent } from './afiliacion.component';
import { AfiliacionRoutingModule } from './afiliacion-routing.module';


@NgModule({
  declarations: [
    AfiliacionComponent
  ],
  imports: [
    CommonModule,
    AfiliacionRoutingModule,
    MaterialModule
  ],
  exports : [AfiliacionComponent]
})
export class AfiliacionModule { }
