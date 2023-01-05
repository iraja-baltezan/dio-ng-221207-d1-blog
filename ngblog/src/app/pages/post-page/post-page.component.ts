import { Component } from '@angular/core';
import { POSTS } from 'src/app/data/mock-posts';
import { IPost } from 'src/app/model/i-post';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent {

  post: IPost = POSTS[0];

  ngOnInit(){

  }
}
