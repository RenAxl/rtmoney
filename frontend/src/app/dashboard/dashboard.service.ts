import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  lancamentosUrl = 'http://localhost:8080/releases';

  constructor(private http: HttpClient){}
  

  lancamentosPorCategoria(): Promise<Array<any>> {
    return this.http.get(`${this.lancamentosUrl}/statistics/by-category`)
      .toPromise()
      .then((response: any) => response);
  }

  lancamentosPorDia(): Promise<Array<any>> {
    return this.http.get(`${this.lancamentosUrl}/statistics/by-day`)
      .toPromise()
      .then((response: any) => {
        const dados = response;
        this.converterStringsParaDatas(dados);

        return dados;
      });
  }

  private converterStringsParaDatas(dados: Array<any>) {
    for (const dado of dados) {
      let offset = new Date().getTimezoneOffset() * 60000;

      dado.day = new Date(dado.day);
      dado.day = new Date(new Date(dado.day).getTime() + offset);
    }
  }
}