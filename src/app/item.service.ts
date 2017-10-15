import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemService {

  private url: string = 'http://localhost:8080/itens';

  constructor(private http: HttpClient) { 
    //  TODO
  }

  /** Faz uma requisição GET para o meu serviço, retorna um Observable */
  public listar(){
    return this.http.get<any[]>(this.url);
  }

  public adicionar(item: any){
    return this.http.post(this.url, item);
  }

}
