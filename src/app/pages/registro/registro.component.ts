import { Component, OnInit } from '@angular/core';
import { UsersService } from '@app/users/users.service';
//import {BaseFormUser}


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html', //register
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent  {
 //username: string;
 //password: string;
 //passwordError: boolean;

  constructor(
    public userService: UsersService,
    //public data:any,

    //private userForm: BaseFormUser,
    private userSvc: UsersService) {}

 onSave():void{
    /* const formValue= this.userForm.baseForm.value;
    this.userService.new(formValue).subscribe(res=> {
      console.log('New',res);
    })*/
  }
}





