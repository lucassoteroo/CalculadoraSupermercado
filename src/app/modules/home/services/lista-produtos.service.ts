import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaProdutosService {

  public emitEvent = new EventEmitter
  private listaProdutos: Array<{ nomeProduto: string, valorProduto: number }> = []
  private valorTotal: any = ''
  
  constructor() { }

  public mostrarListaProdutos() {
    return this.listaProdutos
  }

  public mostrarValorTotal() {
    return this.valorTotal
  }

  public addListaProdutos(nome: string, valor: number) {
    this.listaAlerta(nome)
    return this.listaProdutos.push({ nomeProduto: nome, valorProduto: valor })
  }

  public listaAlerta(value: string) {
    return this.emitEvent.emit(value)
  }

  public calcularValorTotal() {
    let soma: number = 0
    for (const item of this.listaProdutos) {
      soma += item.valorProduto
    }
    this.valorTotal = soma
  }

  public subtrairValor(value: number) {
    this.valorTotal -= value
  }

}
