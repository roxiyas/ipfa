import { Component, OnInit } from '@angular/core';
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
  conceptos : any = [];
  allconceptos : any = [];
  allconceptosd : any = [];
  allConcep :any = [];
  conceptoss : any = [];
  conceptos1 : any = {};
  conceptos2 : any = [];
  conceptos3 : any = [];


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
        const mes = array[i]['mes'];
        const md = array[i]['desde'];
        const mh = array[i]['hasta'];
        const nom = array[i]['nomina'];

        if (md == this.fd && mh == this.fh && nom == this.nom) {
          this.allPostNomina = array[i];
          this.allCalculos = this.allPostNomina.calculos;

          this.conceptos1 = JSON.parse(this.allCalculos);
        }
      }
    })
  }
}
