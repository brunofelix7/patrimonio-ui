import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})

export class ItemCadastroComponent implements OnInit {

  private itens: any[] = [];

  constructor(private itemService: ItemService) { 
    
  }

  /** Chamado quando nosso componente é inicializado, depois do construtor quando tudo estiver injetado  */
  ngOnInit() {
    this.consultar();
  }

  /** Recuperando os dados do meu serviço */
  public consultar(){
    return this.itemService.listar().subscribe(dados => this.itens = dados);
  }

  /** Cria um novo item no meu serviço */
  public novo(frm: FormControl){
    console.log(frm.value);
    this.itemService.adicionar(frm.value).subscribe(() => {
      /** Limpa o formulário */
      frm.reset();
      /** Refaz a pesquisa */
      this.consultar();
    });
  }

}
