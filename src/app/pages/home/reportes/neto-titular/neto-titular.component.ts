import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../home.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-neto-titular',
  templateUrl: './neto-titular.component.html',
  styleUrls: ['./neto-titular.component.scss']
})
export class NetoTitularComponent implements OnInit {

  allPost            : any = [];
  allPost2           : any =[];
  allGrado           : any = [];
  allComponente      : any = [];
  Cor                : any = [];
  Tel                : any = [];
  opcionSeleccionado : string = '0';
  verSeleccion       : string = '';
  url                : string = '';
  allPostNeto        : any = [];
  allPostNomina      : any = [];
  allCalculos        : any = [];
  s_inf              : any = [];
  nom                = '';
  fd                 = '';
  fh                 = '';
  elemtos            : any = [];
  conceptos1         : any = {};
  conceptos          : any = [];  
  conceptos2         : any = [];
  conceptos3         : any = [];
  conceptos4         : any = [];
  monto              : any = [];

  cuenta             = 'string';


  constructor(private data : PostDataService){
      this.data.getPostData().subscribe (data => {
      this.allPost       = data;
      this.allPost2      = this.allPost.Persona.DatoBasico;
      this.allGrado      = this.allPost.Grado;
      this.allComponente = this.allPost.Componente;
      this.Cor           = this.allPost.Persona.Correo;
      this.Tel           = this.allPost.Persona.Telefono;
    })

    this.data.getPostDataNeto().subscribe(inf => {
      this.allPostNeto = inf;
      
      let array = this.allPostNeto;
      for (let i = 0; i < array.length; i++) {
        this.allPostNomina = array[i];
        
        const numeros =  this.allPostNomina['numero']
        
        const s = numeros.split('');
        const a = s['0'];
        const b = s['1'];
        const c = s['2'];
        const d = s['3'];

        const e = s['4'];
        const f = s['5'];
        const g = s['6'];
        const h = s['7'];

        const j = s['8'];
        const k = s['9'];
        const m = s['10'];
        const n = s['11'];

        const o = s['16'];
        const p = s['17'];
        const q = s['18'];
        const r = s['19'];

        const x = 'x';

        this.cuenta = a+b+c+d +x+x+x+x+x+x+x+x+o+p+q+r;
        
      }
    })
  }

  ngOnInit(): void {
  }

  recargar(){
     window.location.reload(); 
  }

  capturar(){this.data.getPostDataNeto().subscribe(data =>{

      this.verSeleccion = this.opcionSeleccionado;
     
      if (this.verSeleccion != '0') {

      $('#lista_n').hide();

      this.s_inf        = this.verSeleccion.split("/");
      this.nom          = this.s_inf['0'];
      this.fd           = this.s_inf['1'];
      this.fh           = this.s_inf['2'];

      let array = this.allPostNeto;
      for (let i = 0; i < array.length; i++){
        const md  = array[i]['desde'];
        const mh  = array[i]['hasta'];
        const nom = array[i]['nomina'];

        if (md == this.fd && mh == this.fh && nom == this.nom){
          this.allPostNomina = array[i];          
          this.allCalculos = this.allPostNomina.calculos;
          this.conceptos1  = JSON.parse(this.allCalculos);

          let concep = this.conceptos1['conceptos'];
          
          for (let i = 0; i < concep.length; i++) {
            const elemento = concep[i]['desc'];
            const monto    = concep[i]['mont'];
            const montos   = parseFloat(monto).toFixed(2);            

            const tipo     = concep[i]['tipo'];          

            this.data.getPostDataConceptos().subscribe(data => {
            this.conceptos = data;
              for (let i = 0; i < this.conceptos.length; i++) {
                const element = this.conceptos[i]['codigo'];
                if (elemento == element) {
                  this.conceptos2 = this.conceptos[i]['descripcion'];
                  this.conceptos4.push(array = {concep : this.conceptos2, montos : montos, tipo: tipo});
                }
              } 
            });

            if (concep[i]['tipo'] == '97') {
              if (concep[i]['desc'] == 'sueldo_base'){
                this.conceptos2 = 'SUELDO BASE';
                this.conceptos4.push(array = {concep : this.conceptos2, montos : montos, tipo: tipo});
              }
              
              if (concep[i]['desc'] == 'prima_descendencia'){
                this.conceptos2 = 'PRIMA DESCENDENCIA';
                this.conceptos4.push(array = {concep : this.conceptos2, montos : montos, tipo: tipo});
              }

              if (concep[i]['desc'] == 'prima_tiemposervicio'){
                this.conceptos2 = 'PRIMA TIEMPO DE SERVICIO';
                this.conceptos4.push(array = {concep : this.conceptos2, montos : montos, tipo: tipo});
              }

              if (concep[i]['desc'] == 'prima_profesionalizacion'){
                this.conceptos2 = 'PRIMA DE PROFESIONALIZACIÓN';
                this.conceptos4.push(array = {concep : this.conceptos2, montos : montos, tipo: tipo});
              }
            }

            if (concep[i]['tipo'] == '1') {
              if (concep[i]['desc'] == 'sueldo_mensual'){
                this.conceptos2 = 'SUELDO MENSUAL';
                this.conceptos4.push(array = {concep : this.conceptos2, montos : montos, tipo: tipo});
              }
            }
          }
        }        
      } 
      }
    })
  }
}
