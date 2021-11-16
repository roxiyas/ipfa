import { NgModule } from "@angular/core";
import {  RouterModule, Routes } from "@angular/router";
import { SolvenciaTrComponent } from "./solvencia-tr.component";


const routes: Routes = [{ path: '', component: SolvenciaTrComponent, children: []
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SolvenciaTrRoutingModule{}