import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ReleaseService {
  lancamentosUrl = 'http://localhost:8080/releases';

  constructor(private http: HttpClient) {}

  pesquisar(): Promise<any> {
    return this.http
      .get(`${this.lancamentosUrl}?summary`)
      .toPromise()
      .then((response: any) => response['content']);
  }
}
