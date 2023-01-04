import { Injectable } from '@angular/core';
import { POSTS } from '../data/mock-posts';
import { IPost } from '../model/i-post';

const FEATURED_CATEGORY_NAME = 'Featured';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getPosts(): IPost[] {
    return POSTS;
  }

  getFeaturedPosts(limitCount: number = 5): IPost[] {
    let featuredPosts: IPost[] = [];
    POSTS.map(post => {
      if (
        post.categories.includes(FEATURED_CATEGORY_NAME)
        &&
        (featuredPosts.length < limitCount)
      ) {
        featuredPosts.push(post);
      }
    });
    return featuredPosts;
  }

}
