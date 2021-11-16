import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FamiliaresComponent } from "./familiares.component";

const routes: Routes = [{ path: '', component: FamiliaresComponent, children: []

}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FamiliaresRoutingModule{}