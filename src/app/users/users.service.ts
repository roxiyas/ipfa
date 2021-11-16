import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { environment } from '@env/environment';

import { User } from "@app/shared/models/user.interface";



@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}


  new(user: User): Observable<User> {
    return this.http
    .post<User>(`${environment.API_URL}/users`, user)
    .pipe(catchError(this.handlerError));
  }
  
  handlerError(error:any):Observable<never>{
    let errorMessage = 'Error desconocido';
    if (error){
      errorMessage= `Error ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
//.post<UserResponse>(`${environment.API_URL}/auth/login`, authData)
