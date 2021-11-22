import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Injectable({
    providedIn: 'root',
})

export class PostDataService implements OnInit, OnDestroy{
  iscedula=null;
  
  private destroy$ = new Subject<any>();

    constructor(private http: HttpClient, private authSvc : AuthService){}

      ngOnInit(): void {  
      }

      getPostData(){
        this.authSvc.iscedula$
        .pipe(takeUntil(this.destroy$))
        .subscribe((res )=> (this.iscedula = res));
        let cedula = this.iscedula;

        let url = "http://app.ipsfa.gob.ve:8081/devel/api/militar/crud/" + cedula;
        return this.http.get(url);
      }

      getPostDataNeto(){
        this.authSvc.iscedula$
        .pipe(takeUntil(this.destroy$))
        .subscribe((res )=> (this.iscedula = res));
        let cedula = this.iscedula;

        let url = "http://app.ipsfa.gob.ve:8081/devel/api/pensionado/consultarneto/" + cedula;
        return this.http.get(url);
      }

      getPostDataConceptos(){
        let url = "http://app.ipsfa.gob.ve:8081/devel/api/nomina/conceptos/listar/";
        return this.http.get(url);
      }
      
      ngOnDestroy(): void {
        this.destroy$.next({});
        this.destroy$.complete();
      }
}