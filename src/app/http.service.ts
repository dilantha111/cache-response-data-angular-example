import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  public getBeerList(): Observable<any> {
    return this.http.get<any>('https://api.punkapi.com/v2/beers');
  }
}
