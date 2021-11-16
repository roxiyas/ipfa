import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { NetoTitularComponent } from "./neto-titular.component";


const routes: Routes = [{ path: '', component: NetoTitularComponent, children: []
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class NetoTitularRoutingModule{}