import { HttpClient } from '@angular/common/http';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UsersService } from '@app/users/users.service';
import { Subscription } from 'rxjs';
import {AlertasService} from "../../shared/services/alertas/alertas.service"
import {ToastrService}from 'ngx-toastr';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html', //register
  styleUrls: ['./registro.component.scss']
})

export class RegistroComponent {


  
  private  isValidEmail = /\S+@\S+\.\S+/;

 // private subscription: Subscription = new Subscription(); //aca pasa algo

  registroForm = this.fb.group({
    cedula:   ['', [Validators.required, Validators.minLength(6)]],
    username: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    componente: ['', [Validators.required]],
    Date: ['', [Validators.required]],
});


  username!: string;
  password!: string;
  passwordError!: boolean;
  cedula!: string;
  role :  string=  "admin";
  cedulafamiliar : string=  "0";
  Date: string; //fecha
  componente!: string;
   
  allData : any = [];
  fechaIng : any = [];

 constructor(
   public userService: UsersService, 
   private http: HttpClient,
   private fb:FormBuilder,
   private toastr: ToastrService,
  
   ) {
    this.Date = new Date().toISOString().slice(0, 0);  //esto es la fecha

 }
 ///se guarda el militar correo y clave

 getPostDataConceptos(){
  let url = "http://app.ipsfa.gob.ve:8081/devel/api/militar/crud/" + this.cedula;
  return this.http.get(url);
}

  register() {
 
  
   this.getPostDataConceptos().subscribe(data => {
      let g = data;
      let obj = Object.values(g); //recorrer un objeto
      let respuesta = obj[0];  
    
      if (respuesta != ''){
        //let compR=data.Componente
        this.allData = data

        let fecha = this.allData.fingreso
        let ISODateIng = new Date(fecha).toISOString();        
        let feIng = ISODateIng.substr(0, 10);
        let faIng = feIng.split("-");

        

        if (faIng[0] != "0001") {
          this.fechaIng =  faIng[0] + "-" + faIng[1] + "-" + faIng[2]; //trasforma la fecha
        } else {
          this.fechaIng = '';
        }

        let compo = this.allData.Componente.abreviatura //componente
        if (compo == this.componente) {
          if (this.Date == this.fechaIng) {
            const user = { username: this.username, password: this.password, cedula: this.cedula, role: this.role, cedulafamiliar : this.cedulafamiliar};
            this.userService.register(user).subscribe(data => {
              //console.log(data);
              
              this.toastr.success('USUARIO REGISTRADO','EXITO');

            });
          }
          else{
             // this.alertas.showSuccess('no es la fecha correcta','Vuelva a intentar');
            console.log('no es fecha');
          }
        }else{
         // this.alertas.showSuccess('No es componente','Vuelva a intentar');
          console.log('no es componente');
          
        }
      }else{
        //this.alertas.showSuccess('Cedula no Existe','Vuelva a intentar');
      console.log('Cedula no Existe');
      }
    })

   // console.log(this.cedula);

}



getErrorMessage(field:string){
  let message;
  if (this.registroForm.get(field)!.errors!.required) {
    message ='campo requerido';

  } else if (this.registroForm.get(field)!.hasError('pattern')){
    message ='Correo no valido ';
  } else if (this.registroForm.get(field)!.hasError('minlength')){
    const minLength = this.registroForm.get(field)!.errors?.minlength.
    requiredLength;
    message = `debe tener minimo  ${minLength} caracteres`;
  }

    return message;
}

isValidField(field : string): boolean{
  return (
    (this.registroForm.get(field)!.touched || this.registroForm.get(field)!.dirty) &&
  !this.registroForm.get(field)!.valid
  );
}


}





