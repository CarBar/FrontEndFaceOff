import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FactFinderService {

  norrisUrl = 'https://api.chucknorris.io/jokes/';
  categories: string[] = [];

  constructor(private http: Http) { }

  getCategories(): Observable<string[]> {
    return this.http.get(`${this.norrisUrl}categories`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getJoke(category: string): Observable<string> {
    return this.http.get(`${this.norrisUrl}random?category=${category}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response): Observable<boolean> {
    console.log(error);
    return Observable.of(false);
  }
}
