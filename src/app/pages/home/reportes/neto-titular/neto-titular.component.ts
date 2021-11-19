import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { left } from '@popperjs/core';
import { PostDataService } from '../../home.service';


@Component({
  selector: 'app-neto-titular',
  templateUrl: './neto-titular.component.html',
  styleUrls: ['./neto-titular.component.scss']
})
export class NetoTitularComponent implements OnInit {

  allPost: any = [];
  allPost2: any=[];
  allGrado: any  = [];
  allComponente: any  = [];
  Cor : any = [];
  Tel : any = [];

  opcionSeleccionado: string  = '0';
  verSeleccion: string        = '';
  url : string = '';

  allPostNeto: any = [];
  allPostNomina : any = [];
  allCalculos : any = [];
  s_inf : any = [];
  nom = '';
  fd = '';
  fh = '';

  elemtos : any = [];

  
  conceptos1 : any = {};
  

  conceptos : any = [];  
  conceptos2 : any = [];
  conceptos3 : any = [];

  conceptos4 : any = [];

  constructor(private data : PostDataService){
      this.data.getPostData().subscribe (data => {
      this.allPost = data;
      this.allPost2 = this.allPost.Persona.DatoBasico;
      this.allGrado = this.allPost.Grado;
      this.allComponente = this.allPost.Componente;
      this.Cor = this.allPost.Persona.Correo;
      this.Tel = this.allPost.Persona.Telefono;
    })

    this.data.getPostDataNeto().subscribe(inf => {
      this.allPostNeto = inf;
      let array = this.allPostNeto;
      for (let i = 0; i < array.length; i++) {
        this.allPostNomina = array[i];
      }
      
    })
  }

  ngOnInit(): void {
  }

  capturar(){this.data.getPostDataNeto().subscribe(data =>{
      this.verSeleccion = this.opcionSeleccionado;
      this.s_inf = this.verSeleccion.split("/");
      this.nom = this.s_inf['0'];
      this.fd = this.s_inf['1'];
      this.fh = this.s_inf['2'];

      let array = this.allPostNeto;
      for (let i = 0; i < array.length; i++) {
        const md = array[i]['desde'];
        const mh = array[i]['hasta'];
        const nom = array[i]['nomina'];

        if (md == this.fd && mh == this.fh && nom == this.nom) {
          this.allPostNomina = array[i];          
          this.allCalculos = this.allPostNomina.calculos;
          this.conceptos1 = JSON.parse(this.allCalculos);
          console.log(this.conceptos1);
          
          let concep = this.conceptos1['conceptos'];
          for (let i = 0; i < concep.length; i++) {
            const elemento = concep[i]['desc'];
    
            this.data.getPostDataConceptos().subscribe( data => {
            this.conceptos = data;
    
              for (let i = 0; i < this.conceptos.length; i++) {
                const element = this.conceptos[i]['codigo'];
    
                if (elemento == element) {
                  this.conceptos2 = this.conceptos[i]['descripcion'];
                  this.conceptos3 = this.conceptos4.push(this.conceptos2);
                } 
              }
            });
          }   

        }        
      }
    })
  }
}
