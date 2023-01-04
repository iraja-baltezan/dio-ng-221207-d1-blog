import { Component } from '@angular/core';
import { IPost } from 'src/app/model/i-post';
import { POSTS } from 'src/app/data/mock-posts';

const FEATURED_CATEGORY_NAME = 'Featured';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.scss']
})
export class FeaturedPostsComponent {
  posts: IPost[] = [];

  ngOnInit() {
    POSTS.map(post => {
      if (
        post.categories.includes(FEATURED_CATEGORY_NAME)
        &&
        (this.posts.length < 5)
      ) {
        this.posts.push(post);
      }
    })
  }

}
