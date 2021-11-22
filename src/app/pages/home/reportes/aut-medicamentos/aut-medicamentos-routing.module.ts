import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { AutMedicamentosComponent } from "./aut-medicamentos.component";


const routes: Routes = [{ path: '', component: AutMedicamentosComponent, children: []
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AutMedicamentosRoutingModule{}