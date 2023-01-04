import { Injectable } from '@angular/core';
import { POSTS } from '../data/mock-posts';
import { IPost } from '../model/i-post';
import { Observable, of } from 'rxjs';

const FEATURED_CATEGORY_NAME = 'Featured';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getPosts(): Observable<IPost[]> {
    const posts = of(POSTS);
    return posts;
  }

  getFeaturedPosts(limitCount: number = 5): Observable<IPost[]> {
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
    return of(featuredPosts);
  }

}
