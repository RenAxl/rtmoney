import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface LancamentoFiltro {
  descricao: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReleaseService {
  lancamentosUrl = 'http://localhost:8080/releases';

  constructor(private http: HttpClient) {}

  pesquisar(filtro: LancamentoFiltro): Promise<any> {

    let params = new HttpParams();

    if (filtro.descricao) {
      params = params.set('description', filtro.descricao); /* description
      é o nome do atributo da classe ReleaseFilter do backend */
    }

    return this.http
      .get(`${this.lancamentosUrl}?summary`, { params })
      .toPromise()
      .then((response: any) => response['content']);
  }
}
