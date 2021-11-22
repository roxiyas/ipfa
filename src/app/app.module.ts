import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MaterialModule } from './material.module';
import { SidebarModule } from './shared/components/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { FamiliaresModule } from './pages/home/familiares/familiares.module';
import { ReportesModule } from './pages/home/reportes/reportes.module';
import { SolvenciaModule } from './pages/home/reportes/solvencia/solvencia.module';
import { AfiliacionModule } from './pages/home/reportes/afiliacion/afiliacion.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

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
    SolvenciaModule,
    AfiliacionModule,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
