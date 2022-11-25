import { Component, OnInit } from '@angular/core';
import { LancamentoFiltro, ReleaseService } from './../release.service';

@Component({
  selector: 'app-research-releases',
  templateUrl: './research-releases.component.html',
  styleUrls: ['./research-releases.component.css'],
})
export class ResearchReleasesComponent implements OnInit {

  descricao: string = '';
  dataVencimentoInicio?: Date;
  dataVencimentoFim?: Date;
  releases: any[] = [];

  constructor(private releaseService: ReleaseService) {}

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    const filtro: LancamentoFiltro = {
      descricao: this.descricao,
      dataVencimentoInicio: this.dataVencimentoInicio,
      dataVencimentoFim: this.dataVencimentoFim
    }

    this.releaseService
      .pesquisar(filtro)
      .then(releases => {
        console.log(releases);
        this.releases = releases
      });
  }
}
