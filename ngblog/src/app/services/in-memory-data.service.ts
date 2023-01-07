import { Injectable } from '@angular/core';
import { getStatusText, InMemoryDbService, RequestInfo, ResponseOptions, STATUS } from 'angular-in-memory-web-api';
import { MOCK_POSTS } from '../data/mock-posts';
import { IPost } from '../model/i-post';
import { ICategory } from '../model/i-category';
import { MOCK_CATEGORIES } from '../data/mock-categories';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const posts: IPost[] = MOCK_POSTS;
    const categories: ICategory[] = MOCK_CATEGORIES;
    return { posts, categories };
  }

  // HTTP GET interceptor
  get(reqInfo: RequestInfo): Observable<any> | undefined {

    // Intercepta requisições com os parâmetros category e limit
    if (
      reqInfo.collectionName === 'posts'
      &&
      reqInfo.query.has('category')
    ) {
      return this.getPostsByCategory(reqInfo);
    }
    return undefined;  // let the default GET handle all others
  }

  // HTTP GET interceptor manipula a requisição de posts por categoria
  private getPostsByCategory(reqInfo: RequestInfo) {
    const category = reqInfo.query.get('category')?.[0];
    let limit = Number(reqInfo.query.get('limit')?.[0]);

    // Remove category e limit dos parâmetros da query
    // assim estes não serão considerados posteriormente como parâmetros de
    // filtragem da coleção.
    reqInfo.query.delete('catetory');
    reqInfo.query.delete('limit');

    return reqInfo.utils.createResponse$(() => {
      const collection = reqInfo.collection as IPost[];
      const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;

      let data: any;
      if (category) {
        limit = limit > 0 ? limit : collection.length;

        data = collection
          .filter(element => element.categories.includes(category))
          .slice(0, limit + 1);
      }
      else {
        data = collection;
      }

      const options: ResponseOptions = data ?
        {
          body: dataEncapsulation ? { data } : data, status: STATUS.OK
        } :
        {
          body: { error: `'${reqInfo.collectionName}' with reqInfo='${reqInfo}'` },
          status: STATUS.NOT_FOUND
        };

      return this.finishOptions(options, reqInfo);

    });
  }

  private finishOptions(options: ResponseOptions, { headers, url }: RequestInfo) {
    options.statusText = options.status == null ? undefined : getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }
}