import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsFetchService {

  private newsUrl = 'www.someurl.com.au';

  constructor(
    private http: HttpClient) { }

  getNews (category: string){

    return this.get<NewsFeed[]>(this.newsUrl).pipe(
      tap(_ => this.log('fetchNews')),
      catchError(this.handleError('', []))
    );
  }
}
