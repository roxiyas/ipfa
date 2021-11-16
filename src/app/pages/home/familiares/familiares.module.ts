import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';

import { FamiliaresRoutingModule } from './familiales-routing.module';
import { FamiliaresComponent } from './familiares.component';


@NgModule({
  declarations: [
    FamiliaresComponent
  ],
  imports: [
    CommonModule,
    FamiliaresRoutingModule,
    MaterialModule
  ]
})

export class FamiliaresModule { }
