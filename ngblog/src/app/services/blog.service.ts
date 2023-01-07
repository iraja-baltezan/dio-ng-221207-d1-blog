import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IPost } from '../model/i-post';

const FEATURED_CATEGORY_NAME = 'Featured';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private postsUrl = 'api/posts'; // URL para a api web

  constructor(
    private http: HttpClient
  ) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.postsUrl);
  }

  getPostsByCategoryTitle(title: string, limitCount: number = 5): Observable<IPost[]> {
    title = title.trim();
    // adiciona parâmetro de pesquisa seguro e codificado
    // se o título estiver presente
    const options = title ? { params: new HttpParams().set('category', title) } : {};
    return this.http
      .get<IPost[]>(this.postsUrl, options)
      .pipe(catchError(this.handleError));
  }

  // getFeaturedPosts(limitCount: number = 5): Observable<IPost[]> {
    // let featuredPosts: IPost[] = [];
    // MOCK_POSTS.map(post => {
    //   if (
    //     post.categories.includes(FEATURED_CATEGORY_NAME)
    //     &&
    //     (featuredPosts.length < limitCount)
    //   ) {
    //     featuredPosts.push(post);
    //   }
    // });
    // return of(featuredPosts);
  // }

  getPostById(id: number): Observable<IPost> {
    // const searchResult = MOCK_POSTS.find(post => post.id === id);
    // return of(searchResult);
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<IPost>(url).pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    // Em um aplicativo do mundo real,
    // podemos enviar o erro para a infraestrutura de registro remoto
    // e reformatar para consumo do usuário
    return throwError(() => new Error(error));
  }
}
