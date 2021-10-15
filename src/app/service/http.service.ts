import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url_ = 'https://data.messari.io/api/v2/assets';
  constructor(private http: HttpClient) {}

  getApi(): Observable<any> {
    return this.http.get(this.url_);
  }
}
