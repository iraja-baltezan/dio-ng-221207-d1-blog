import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MOCK_POSTS } from '../data/mock-posts';
import { IPost } from '../model/i-post';
import { ICategory } from '../model/i-category';
import { MOCK_CATEGORIES } from '../data/mock-categories';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const posts:IPost[] = MOCK_POSTS;
    const categories: ICategory[] = MOCK_CATEGORIES;
    return {posts, categories};
  }

  // Overrides the genId method
  // to ensure that a post always has an id.
  // If the posts array is empty,
  // the method below returns the initial number (1).
  // if the posts array is not empty,
  // the method below returns the highest post id + 1.
  // genId(posts: IPost[]): number {
  //   return posts.length > 0 ? Math.max(...posts.map(post => post.id)) + 1 : 1;
  // }
}