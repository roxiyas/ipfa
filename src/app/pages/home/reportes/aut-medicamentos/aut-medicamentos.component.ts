import { Component, OnInit } from '@angular/core';
import { PostDataService } from '../../home.service';
@Component({
  selector: 'app-aut-medicamentos',
  templateUrl: './aut-medicamentos.component.html',
  styleUrls: ['./aut-medicamentos.component.scss']
})
export class AutMedicamentosComponent implements OnInit {

  allPost: any = [];
  allPost2: any=[];

  constructor(private post: PostDataService){
    this.post.getPostData().subscribe (data => {
      this.allPost = data;
      this.allPost2 = this.allPost.Persona.DatoBasico;
    })
  }

  ngOnInit(): void {
  }

}
