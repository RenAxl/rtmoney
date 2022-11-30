import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoriasUrl = 'http://localhost:8080/categories';

  constructor(private http: HttpClient) { }

  listarTodas(): Promise<any> {

    return this.http.get(this.categoriasUrl)
      .toPromise()
      .then((response: any) => {
        const categories = response.content;  
        return categories;
      });
  }
}