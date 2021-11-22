import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/pages/auth/auth.service';
import { PostDataService } from '../home.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  allPost: any = [];
  allPost2: any=[];

  constructor(private post: PostDataService){
    this.post.getPostData().subscribe (data => {
      this.allPost = data;
      this.allPost2 = this.allPost.situacion;
      console.log(this.allPost2);
      
    })
  }

  ngOnInit(): void {
  }

}
