import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AfiliacionComponent } from "./afiliacion.component";

const routes: Routes = [{ path: '', component : AfiliacionComponent, children: []}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AfiliacionRoutingModule{}