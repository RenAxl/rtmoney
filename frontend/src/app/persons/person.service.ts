import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../core/model';

export class PessoaFiltro {
  nome?: string;
  pagina = 0;
  itensPorPagina = 3;
}

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  pessoasUrl = 'http://localhost:8080/persons';
  
  constructor(private http: HttpClient) { }

  pesquisar(filtro: PessoaFiltro): Promise<any> {

    let params = new HttpParams()
    .set('page', filtro.pagina)
    .set('linesPerPage', filtro.itensPorPagina);

    if (filtro.nome) {
      params = params.set('name', filtro.nome);
    }

    return this.http
    .get(`${this.pessoasUrl}`, { params })
    .toPromise()
    .then((response: any) => {
      const pessoas = response['content'];

      const resultado = {
        pessoas,
        total: response['totalElements']
      };

      return resultado;
    });
  }
  
  excluir(codigo: number): Promise<void> {
    return this.http.delete<void>(`${this.pessoasUrl}/${codigo}`)
      .toPromise();
  }

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<void>(`${this.pessoasUrl}/${codigo}/active`, ativo, { headers })
      .toPromise();
  }

  listarTodas(): Promise<any> {

    return this.http.get(this.pessoasUrl)
      .toPromise()
      .then((response: any) => {
        const persons = response.content;  
        return persons;
      });
  }

  adicionar(person: Person): Promise<any> {
    
    return this.http.post(this.pessoasUrl, person)
      .toPromise();
  }

  atualizar(person: Person): Promise<any> {
 
    return this.http.put(`${this.pessoasUrl}/${person.id}`, person)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }


  buscarPorCodigo(id: number): Promise<Person> {
    
    return this.http.get(`${this.pessoasUrl}/${id}`)
      .toPromise()
      .then((response: any) => {
        return response;
      });
  }

}

