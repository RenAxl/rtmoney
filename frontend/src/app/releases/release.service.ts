import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Release } from '../core/model';

export class LancamentoFiltro {
  descricao?: string;
  dataVencimentoInicio?: Date;
  dataVencimentoFim?: Date;
  pagina = 0;
  itensPorPagina = 3;
}

@Injectable({
  providedIn: 'root',
})
export class ReleaseService {
  lancamentosUrl = 'http://localhost:8080/releases';

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  pesquisar(filtro: LancamentoFiltro): Promise<any> {

    let params = new HttpParams()
    .set('page', filtro.pagina)
    .set('size', filtro.itensPorPagina);

    if (filtro.descricao) {
      params = params.set('description', filtro.descricao); /* description
      é o nome do atributo da classe ReleaseFilter do backend */
    }

    if (filtro.dataVencimentoInicio) {
      params = params.set('dueDateOf', this.datePipe.transform(filtro.dataVencimentoInicio, 'yyyy-MM-dd')!);
      /* dueDateOf é o nome do atributo da classe ReleaseFilter do backend */
    }

    if (filtro.dataVencimentoFim) {
      params = params.set('dueDateUntil', this.datePipe.transform(filtro.dataVencimentoFim, 'yyyy-MM-dd')!);
      /* dueDateUntil é o nome do atributo da classe ReleaseFilter do backend */
    }

    return this.http
      .get(`${this.lancamentosUrl}?summary`, { params })
      .toPromise()
      .then((response: any) => {
        const lancamentos = response['content'];

        const resultado = {
          lancamentos,
          total: response['totalElements']
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.lancamentosUrl}/${codigo}`)
      .toPromise();
  }

  adicionar(release: Release): Promise<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post(this.lancamentosUrl, release, { headers })
      .toPromise();
  }

}
