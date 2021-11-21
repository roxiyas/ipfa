import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Roles, User, UserResponse } from '@app/shared/models/user.interface';
import { catchError, map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {ToastrService} from 'ngx-toastr';


const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn= new BehaviorSubject <boolean>(false);
 // private role = new BehaviorSubject<Roles>(null);
 //private role= new BehaviorSubject <void>;

  private cedula = new BehaviorSubject<User | any>(null);
  
  private role = new BehaviorSubject<Roles | null>(null);

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) {
    this.checkToken();
   }

  get isLogged(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  get isAdmin$(): Observable <any> {
    return this.role.asObservable ();
  }

  get iscedula$(): Observable <any> {
    return this.cedula.asObservable ();
  }

  

  login(authData: User): Observable<UserResponse | void>{  
    return this.http
    .post<UserResponse>(`${environment.API_URL}/auth/login`, authData)
    .pipe(
      map((user:UserResponse)=> {  
        this.saveLocalStorage(user);
        this.loggedIn.next(true);
        this.role.next(user.role);
        this.cedula.next(user.cedula);    
        return user;
      }),
      
      catchError((err)=> this.handlerError(err))
    );
    
    
  };
  
  logout():void{
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.role.next(null);
    this.router.navigate(['/login']);
  };

  private checkToken(): void {
    const user = JSON.parse(localStorage.getItem('user')!) || null;
   /* console.log(user);*/
    
    if (user) {      
      const isExpired = helper.isTokenExpired(user.token);

      if (isExpired) {
        this.logout();
      } else {
        //this.user.next(user);
        this.loggedIn.next(true);
        this.role.next(user.role);
        this.cedula.next(user.cedula);      
      }
    }
  }


  private saveLocalStorage(user: UserResponse): void {
    const { userId, message, ...rest } = user;
    localStorage.setItem('user', JSON.stringify(rest));
  }
   //mensaje de no login error
  private handlerError(err:any): Observable<never> {

    

   let errorMessage = 'USUARIO O CLAVE INCORRECTO';
    if (err) {
      errorMessage = `Error:  ${errorMessage}`;
     
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
