import { Injectable } from '@angular/core';
import { MOCK_POSTS } from '../data/mock-posts';
import { IPost } from '../model/i-post';
import { Observable, of } from 'rxjs';

const FEATURED_CATEGORY_NAME = 'Featured';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getPosts(): Observable<IPost[]> {
    const posts = of(MOCK_POSTS);
    return posts;
  }

  getFeaturedPosts(limitCount: number = 5): Observable<IPost[]> {
    let featuredPosts: IPost[] = [];
    MOCK_POSTS.map(post => {
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

  getPostById(id: number): Observable<IPost | undefined> {
    const searchResult = MOCK_POSTS.find(post => post.id === id);
    return of(searchResult);
  }

}
