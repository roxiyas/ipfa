import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetoTitularComponent } from './neto-titular.component';

import { MaterialModule } from '@app/material.module';
import { NetoTitularRoutingModule } from './neto-titular-routing.module';




@NgModule({
  declarations: [
    NetoTitularComponent
  ],
  imports: [
    CommonModule,
    NetoTitularRoutingModule,
    MaterialModule
  ],
  exports: [NetoTitularComponent],
})
export class NetoTitularModule { }