import { Component } from '@angular/core';
import { PessoaFiltro, PersonService } from '../person.service';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-research-persons',
  templateUrl: './research-persons.component.html',
  styleUrls: ['./research-persons.component.css'],
})
export class ResearchPersonsComponent {

  filtro = new PessoaFiltro();

  totalRegistros: number = 0;

  persons: any[] = [];

  constructor (private personService: PersonService){}

  pesquisar(pagina: number = 0): void {
    this.filtro.pagina = pagina;
    
    this.personService.pesquisar(this.filtro)
    .then((dados: any) => {
      this.persons = dados.pessoas;
      this.totalRegistros = dados.total;
    });
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event!.first! / event!.rows!;
    this.pesquisar(pagina);
  }
  
    
  
}
