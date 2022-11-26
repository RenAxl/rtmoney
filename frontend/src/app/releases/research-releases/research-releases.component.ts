import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { LancamentoFiltro, ReleaseService } from './../release.service';

@Component({
  selector: 'app-research-releases',
  templateUrl: './research-releases.component.html',
  styleUrls: ['./research-releases.component.css'],
})
export class ResearchReleasesComponent implements OnInit {
  
  filtro = new LancamentoFiltro();

  totalRegistros: number = 0

  releases: any[] = [];

  @ViewChild('tabela') grid!: Table;

  constructor(
    private releaseService: ReleaseService,
    private messageService: MessageService
    ) {}

  ngOnInit(): void {
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;
    
    this.releaseService.pesquisar(this.filtro)
    .then(resultado => {
      this.releases = resultado.lancamentos;
      this.totalRegistros = resultado.total;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  excluir(release: any) {
    this.releaseService.excluir(release.id)
      .then(() => {
        this.grid.reset();
        this.messageService.add({ severity: 'success', detail: 'Lançamento excluído com sucesso!' })
      })
  }
}
