import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IPost } from '../model/i-post';
import { ICategory } from '../model/i-category';

const FEATURED_CATEGORY_NAME = 'Featured';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  // URL para a api web
  private postsUrl = 'api/posts';
  private categoriesUrl = 'api/categories';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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
      .pipe(
        catchError(this.handleError<IPost[]>('getPostsByCategoryTitle'))
      );
  }

  getPostById(id: number): Observable<IPost> {
    const url = `${this.postsUrl}/${id}`;
    return this.http
      .get<IPost>(url)
      .pipe(
        catchError(this.handleError<IPost>('getPostById'))
      );
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.categoriesUrl)
  }

  updatePost(post: IPost) {
    console.log(1,post)
    return this.http.put<IPost>(this.postsUrl, post, this.httpOptions)
      .pipe(
        tap(_ => {this.log(`Updated post id=${post.id}`)}),
        catchError(this.handleError<any>('updatePost'))
      )
      .subscribe(response=>console.log(2,response))
  }

  /**
   * Lida com a operação Http que falhou.
   * Permite ao app continuar a execução.
   *
   * @param operation - nome da operação que falhou
   * @param result - valor opcional para retornar como resultado observável
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      this.log(`${operation} failed: ${error.message}`);

      //  Deixa o app continuar em execução retornando um resultado vazio.
      return of(result as T);
    };
  }

  /** Registra uma mensagem do BlogService */
  private log(message: string) {
    console.log(`BlogService: ${message}`);
  }
}
