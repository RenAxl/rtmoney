import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

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
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title
    ) {}

  ngOnInit(): void {
    this.title.setTitle('Pesquisa de lançamentos')
  }

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;
    
    this.releaseService.pesquisar(this.filtro)
    .then(resultado => {
      this.releases = resultado.lancamentos;
      this.totalRegistros = resultado.total;
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }

  confirmarExclusao(lancamento: any): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(lancamento);
      }
    });
  }

  excluir(release: any) {
    this.releaseService.excluir(release.id)
      .then(() => {
        this.grid.reset();
        this.messageService.add({ severity: 'success', detail: 'Lançamento excluído com sucesso!' })
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
