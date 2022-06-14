import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaProdutosService {

  private listaProdutos: Array<{nomeProduto: string, valorProduto: number}> = [{nomeProduto: 'Arroz', valorProduto: 3}]
  constructor() { }

  public mostrarListaProdutos() {
    return this.listaProdutos
  }

  public addListaProdutos(nome: string, valor: number) {
    return this.listaProdutos.push({nomeProduto: nome, valorProduto: valor})
  }

}
