import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;//ojito

  private  isValidEmail = /\S+@\S+\.\S+/;

  private subscription: Subscription = new Subscription(); //aca pasa algo

  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.pattern(this.isValidEmail)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
});

  constructor(

    private authSvc: AuthService,
    private fb:FormBuilder,
    private router:Router,
    private toastr: ToastrService) { }



  ngOnInit(): void {
   // const userData={
     // username:'malo@gmail.com',
      //password:'987654321',

    //};
   // this.authSvc.login(userData).subscribe((res)=> console.log('login'));
  }
  ngOnDestroy(): void {
   this.subscription.unsubscribe();
   }

  onLogin():void{

    if (this.loginForm.invalid) {
      return;
    }

    const formValue=this.loginForm.value;
    this.subscription.add(
      this.authSvc.login(formValue).subscribe((res) =>{
      if(res){
        this.router.navigate(['/home']);
      }
    })
    );
  }

  getErrorMessage(field:string){
    let message;
    if (this.loginForm.get(field)!.errors!.required) {
      message ='campo requerido';

    } else if (this.loginForm.get(field)!.hasError('pattern')){
      message ='Correo no valido ';
    } else if (this.loginForm.get(field)!.hasError('minlength')){
      const minLength = this.loginForm.get(field)!.errors?.minlength.
      requiredLength;
      message = `debe tener minimo  ${minLength} caracteres`;
    }

      return message;
  }

  isValidField(field : string): boolean{
    return (
      (this.loginForm.get(field)!.touched || this.loginForm.get(field)!.dirty) &&
    !this.loginForm.get(field)!.valid
    );
  }



}
