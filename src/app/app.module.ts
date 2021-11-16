import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MaterialModule } from './material.module';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { FamiliaresModule } from './pages/home/familiares/familiares.module';
import { ReportesModule } from './pages/home/reportes/reportes.module';
import { SolvenciaModule } from './pages/home/reportes/solvencia/solvencia.module';
//import { RegistroComponent } from './pages/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  //  RegistroComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule,
    HttpClientModule,
    FamiliaresModule,
    ReportesModule,
    SolvenciaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }