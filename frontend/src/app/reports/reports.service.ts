import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  lancamentosUrl = 'http://localhost:8080/releases';

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) {}

  relatorioLancamentosPorPessoa(inicio: Date, fim: Date) {
    const params = new HttpParams()
      .set('start', this.datePipe.transform(inicio, 'yyyy-MM-dd')!)
      .set('end', this.datePipe.transform(fim, 'yyyy-MM-dd')!);

    return this.http.get(`${this.lancamentosUrl}/reports/per-person`,
      { params, responseType: 'blob' })
      .toPromise();
  }
}