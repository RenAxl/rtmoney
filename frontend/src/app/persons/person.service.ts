import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class PessoaFiltro {
  nome?: string;
  pagina = 0;
  itensPorPagina = 3;
}

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  pessoasUrl = 'http://localhost:8080/persons';
  
  constructor(private http: HttpClient) { }

  pesquisar(filtro: PessoaFiltro): Promise<any> {

    let params = new HttpParams()
    .set('page', filtro.pagina)
    .set('linesPerPage', filtro.itensPorPagina);

    if (filtro.nome) {
      params = params.set('name', filtro.nome);
    }

    return this.http
    .get(`${this.pessoasUrl}`, { params })
    .toPromise()
    .then((response: any) => {
      const pessoas = response['content'];

      const resultado = {
        pessoas,
        total: response['totalElements']
      };

      return resultado;
    });
  }
  
}
