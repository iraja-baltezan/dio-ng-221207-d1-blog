import { Component } from '@angular/core';
import { IPost } from 'src/app/model/i-post';
// import { MOCK_POSTS } from 'src/app/data/mock-posts';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.scss']
})
export class FeaturedPostsComponent {
  posts: IPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.getFeaturedPosts();
  }

  getFeaturedPosts(): void {
    this.blogService
      .getPostsByCategoryTitle('Featured')
      .subscribe(posts => this.posts = posts);
  }

}
