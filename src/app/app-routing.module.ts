import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckLoginGuard } from '@shared/guards/check-login.guard';

const routes: Routes = [
  { path:'', redirectTo: 'login', pathMatch: 'full'  },

  {path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule), },
  {path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule), },
  {path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then((m) => m.AdminModule), },
  {path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginModule),
    canActivate: [CheckLoginGuard]
  },
  
  { path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then((m) => m.RegistroModule)},

  { path: 'familiares', loadChildren: () => import('./pages/home/familiares/familiares.module').then(m => m.FamiliaresModule)},
  { path: 'inicio', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'reportes', loadChildren: () => import('./pages/home/reportes/reportes.module').then(m => m.ReportesModule)},
  { path: 'solvencia', loadChildren: () => import('./pages/home/reportes/solvencia/solvencia.module').then(m => m.SolvenciaModule)},
  { path: 'afiliacion', loadChildren: () => import('./pages/home/reportes/afiliacion/afiliacion.module').then(m => m.AfiliacionModule)},

  {path: '**', loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
