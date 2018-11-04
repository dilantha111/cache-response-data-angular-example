import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const URL = 'https://api.punkapi.com/v2/beers';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public responseCache = new Map();

  constructor(private http: HttpClient) {}

  public getBeerList(): Observable<any> {
    const beersFromCache = this.responseCache.get(URL);
    if (beersFromCache) {
      return of(beersFromCache);
    }
    const response = this.http.get<any>(URL);
    response.subscribe(beers => this.responseCache.set(URL, beers));
    return response;
  }
}
