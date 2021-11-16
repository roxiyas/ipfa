import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root',
})

export class PostDataNetoService{
  constructor(private http: HttpClient){}
  getPostDataNeto(){
    let url = "http://app.ipsfa.gob.ve:8081/devel/api/pensionado/consultarneto/" + 5208744;
    return this.http.get(url);
  }
}
