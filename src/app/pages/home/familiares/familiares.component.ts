import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/pages/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PostDataService } from '../home.service';

@Component({
  selector: 'app-familiares',
  templateUrl: './familiares.component.html',
  styleUrls: ['./familiares.component.scss']
})
export class FamiliaresComponent{

  constructor (public authSvc:AuthService, private post: PostDataService){
    this.post.getPostData().subscribe (data => {
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
