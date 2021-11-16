import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../home.service';

@Component({
  selector: 'app-solvencia-tr',
  templateUrl: './solvencia-tr.component.html',
  styleUrls: ['./solvencia-tr.component.scss']
})
export class SolvenciaTrComponent implements OnInit {

  allPost: any = [];
  allPost2: any=[];
  allGrado: any  = [];
  allComponente: any  = [];
  Cor : any = [];
  Tel : any = [];



  constructor(private post: PostDataService) {
    this.post.getPostData().subscribe (data => {
      this.allPost = data;
      this.allPost2 = this.allPost.Persona.DatoBasico;
      this.allGrado = this.allPost.Grado;
      this.allComponente = this.allPost.Componente;
      this.Cor = this.allPost.Persona.Correo;
      this.Tel = this.allPost.Persona.Telefono;
    })
   }

  ngOnInit(): void {
  }

}
