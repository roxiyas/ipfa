import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../home.service';

@Component({
  selector: 'app-afiliacion',
  templateUrl: './afiliacion.component.html',
  styleUrls: ['./afiliacion.component.scss']
})
export class AfiliacionComponent implements OnInit {

  allPost: any = [];
  allPost2: any=[];
  allGrado: any  = [];
  allComponente: any  = [];
  Cor : any = [];
  Tel : any = [];

  allFec : any = [];
  fechaIng : any = [];

  allFecf : any = [];
  fechaIngf : any = [];

  allFecUA : any = [];
  fechaUA: any = [];

  conceptos1 : any = [];

  sexo : any = [];
  esdcivil : any = [];
  direccion_c : any = [];

  allFam : any = [];
  allFecFA : any = [];
  fechaIngFA : any = [];
  fecharangf : any = [];

  situacion : any = [];
  categoria : any = [];
  clasificacion : any = [];
  parentesco : any = [];
  situacionm : any = [];

  constructor(private post: PostDataService) {

    this.post.getPostData().subscribe (data => {
      this.allPost = data;
      
      this.allPost2 = this.allPost.Persona.DatoBasico;
      this.allGrado = this.allPost.Grado;
      
      let situ = this.allPost.situacion;
      if (situ == 'ACT') {
        this.situacionm = 'ACTIVO';
      }if (situ = 'RCP') {
        this.situacionm = 'RESERVA ACTIVA CON GOCE PENSIÓN';
      }

      let cat = this.allPost.categoria;
      if (cat == 'EFE') {
        this.categoria = 'EFETIVO';
      }else if(cat == 'ASI'){
        this.categoria = 'ASIMILADO';
      }
      
      let clasf = this.allPost.clase;
      if (clasf == 'TPROF') {
        this.clasificacion = 'TROPA PROFESIONAL';
      }else if (clasf == 'ASI') {
        this.clasificacion = 'ASIMILADO';
      }else if (clasf == 'OFIT'){
        this.clasificacion = 'OFICIAL TÉCNICO';
      }else if (clasf == 'OFITR'){
        this.clasificacion = 'OFICIAL TROPA';
      }else if (clasf == 'OFI'){
        this.clasificacion = 'COMANDO';
      }
      
      this.Cor = this.allPost.Persona.Correo;
      this.Tel = this.allPost.Persona.Telefono;

      //ARREGLO PARA CONVERTIR LA FECHA DE NACIMIENTO
      this.allFec = this.allPost2.fechanacimiento;
        let ISODateIng = new Date(this.allFec).toISOString();        
        let feIng = ISODateIng.substr(0, 10);
        let faIng = feIng.split("-");
   
        if (faIng[0] != "0001") {
          this.fechaIng =  faIng[2] + "/" + faIng[1] + "/" + faIng[0];
        } else {
          this.fechaIng = '';
        }

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
        this.esdcivil = 'CASADO'
      }else if(this.esdcivil == 'S'){
        this.esdcivil = 'SOLTERO'
      }else if(this.esdcivil == 'D'){
        this.esdcivil = 'DIVOCIADO'
      }else if(this.esdcivil == 'V'){
        this.esdcivil = 'VIUDO'
      }

      //DIRECCION
      let direccion = this.allPost.Persona.Direccion['0'];
      this.direccion_c = direccion.calleavenida+' '+direccion.casa+' '+direccion.municipio+' '+direccion.parroquia+' '+direccion.ciudad;

      //ARREGLO PARA CONVERTIR LA FECHA DE INGRESO
        this.allFecf = this.allPost.fingreso;
        let ISODateIngS = new Date(this.allFecf).toISOString();        
        let feIngfb = ISODateIngS.substr(0, 10);
        let faIngf = feIngfb.split("-");
   
        if (faIngf[0] != "0001") {
          this.fechaIngf =  faIngf[2] + "/" + faIngf[1] + "/" + faIngf[0];
        } else {
          this.fechaIngf = '';
        }
      
      //ARREGLO PARA CONVERTIR LA FECHA DE ULTIMO ASCENSO
        this.allFecUA = this.allPost.fascenso;
        let ISODateIngUL = new Date(this.allFecUA).toISOString();        
        let feUA = ISODateIngUL.substr(0, 10);
        let faUA = feUA.split("-");

        if (faUA[0] != "0001") {
          this.fechaUA =  faUA[2] + "/" + faUA[1] + "/" + faUA[0];
        } else {
          this.fechaUA = '';
        }
        
        this.allFam = this.allPost.Familiar;
        let array = this.allFam;
        for (let i = 0; i < array.length; i++) {
         
          this.allFecFA = array[i]['Persona']['DatoBasico']['fechanacimiento'];
          this.fechaIngFA = this.allFecFA;
          
          let ISODateFA = new Date(this.fechaIngFA).toISOString();
          let fefa = ISODateFA.substr(0, 10);
          let fafa = fefa.split("-");
          if (fafa[0] != "0001") {
            let allFecFAM =  fafa[2] + "/" + fafa[1] + "/" + fafa[0];
             this.fecharangf.push(allFecFAM);
          } else {
            this.fecharangf = '';
          }  
          
          let fecDef = array[i]['Persona']['DatoBasico']['fechadefuncion'];
          
          let ISOfecDef = new Date(fecDef).toISOString();
          let fedf = ISOfecDef.substr(0, 10);
          let fadff = fedf.split("-");

          let situacions = array[i]['beneficio'];

          if (fadff[0] != "0001") {
            let situacion = 'FALLECIDO'
            this.situacion.push(situacion);
          } else if (situacions == false) {
            let situacion = 'INACTIVO'
           this.situacion.push(situacion);
         }else{
           let situacion = 'ACTIVO'
           this.situacion.push(situacion);
         }

         let s_parentesco = array[i]['Persona']['DatoBasico']['sexo'];
         let parentesco = array[i]['parentesco'];

          if (s_parentesco == 'F' && parentesco == 'EA') {
            let par = 'ESPOSA'
            this.parentesco.push(par);
          }else if (s_parentesco == 'M' && parentesco == 'EA') {
            let par = 'ESPOSO'
            this.parentesco.push(par);
          }else if (s_parentesco == 'F' && parentesco == 'PD') {
            let par = 'MADRE'
            this.parentesco.push(par);
          }else if (s_parentesco == 'M' && parentesco == 'PD') {
            let par = 'PADRE'
            this.parentesco.push(par);
          }else if (s_parentesco == 'M' && parentesco == 'HJ') {
            let par = 'HIJO'
            this.parentesco.push(par);
          }else if (s_parentesco == 'F' && parentesco == 'HJ') {
            let par = 'HIJA'
            this.parentesco.push(par);
          }      
        }
    })
   }

  ngOnInit(): void {
  }

}
