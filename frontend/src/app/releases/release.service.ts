import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio?: Date,
  dataVencimentoFim?: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ReleaseService {
  lancamentosUrl = 'http://localhost:8080/releases';

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  pesquisar(filtro: LancamentoFiltro): Promise<any> {

    let params = new HttpParams();

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
      .then((response: any) => response['content']);
  }
}
