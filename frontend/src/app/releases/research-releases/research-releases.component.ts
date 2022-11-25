import { Component, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';

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

  constructor(private releaseService: ReleaseService) {}

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

}
