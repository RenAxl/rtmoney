import { Component, OnInit } from '@angular/core';
import { ReportService } from '../reports.service';

@Component({
  selector: 'app-report-release',
  templateUrl: './report-release.component.html',
  styleUrls: ['./report-release.component.css']
})
export class ReportReleaseComponent implements OnInit {

  periodoInicio?: Date;
  periodoFim?: Date;

  constructor(private reportsService: ReportService) { }

  ngOnInit(): void {
  }

  gerar() {
    this.reportsService.relatorioLancamentosPorPessoa(this.periodoInicio!, this.periodoFim!)
    .then((relatorio: any) => {
      const url = window.URL.createObjectURL(relatorio);
      window.open(url);
    });
  }

}
