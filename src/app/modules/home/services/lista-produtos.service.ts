import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaProdutosService {

  public emitEvent = new EventEmitter
  private listaProdutos: Array<{ nomeProduto: string, valorProduto: number }> = [{ nomeProduto: 'Arroz', valorProduto: 3 }]
  
  constructor() { }

  public mostrarListaProdutos() {
    return this.listaProdutos
  }

  public addListaProdutos(nome: string, valor: number) {
    this.listaAlerta(nome)
    return this.listaProdutos.push({ nomeProduto: nome, valorProduto: valor })
  }

  public listaAlerta(value: string) {
    return this.emitEvent.emit(value)
  }

}
