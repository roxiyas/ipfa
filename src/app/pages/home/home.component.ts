import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth/auth.service';
import { PostDataService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allPost: any = [];
  allPost2: any=[];
  allGrado: any  = [];
  allComponente: any  = [];
  sexo = 'string';
  esdcivil = 'strin';
  fechanac = '';
  ISODate = '';
  fe = '';
  fa : any = [];

  fechaIng = '';
  ISODateIng = '';
  feIng = '';
  faIng : any = [];

  constructor( public authSvc:AuthService, private post: PostDataService){
    this.post.getPostData().subscribe (data => {
      this.allPost = data;
      this.allPost2 = this.allPost.Persona.DatoBasico;
      this.allGrado = this.allPost.Grado;
      this.allComponente = this.allPost.Componente;

      //ARREGLO PARA SEXO
      this.sexo = this.allPost2.sexo;
      if(this.sexo == 'M'){
          this.sexo = 'Masculino'
      }else{
        this.sexo =  'Femenino'
      }
      //ARREGLO PARA ESTADO CIVIL
      this.esdcivil = this.allPost2.estadocivil;
      if (this.esdcivil == 'C') {
        this.esdcivil = 'Casado'
      }else if(this.esdcivil == 'S'){
        this.esdcivil = 'Soltero'
      }else if(this.esdcivil == 'D'){
        this.esdcivil = 'Divorciado'
      }else if(this.esdcivil == 'V'){
        this.esdcivil = 'Viudo'
      }

      //CALCULO PARA FECHA DE NACIMIENTO
      this.fechanac = this.allPost2.fechanacimiento;
      this.ISODate = new Date(this.fechanac).toISOString();
      this.fe = this.ISODate.substr(0, 10);
      this.fa = this.fe.split("-");
      if (this.fa[0] != "0001") {
        this.fechanac =  this.fa[2] + "/" + this.fa[1] + "/" + this.fa[0];
      } else {
        this.fechanac = '';
      }
      //CALCULO DE LA FECHA DE INGRESO A LA F
      this.fechaIng = this.allPost.fingreso;
      this.ISODateIng = new Date(this.fechaIng).toISOString();
      this.feIng = this.ISODate.substr(0, 10);
      this.faIng = this.fe.split("-");
      if (this.faIng[0] != "0001") {
        this.fechaIng =  this.faIng[2] + "/" + this.faIng[1] + "/" + this.faIng[0];
      } else {
        this.fechaIng = '';
      }
    })
  
  }

  ngOnInit(): void {
  }

}
