import { Component, DoCheck, OnInit } from '@angular/core';
import { ListaProdutosService } from '../../services/lista-produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit, DoCheck {

  public listaProdutos: Array<{ nomeProduto: string, valorProduto: any }> = []
  public valorTotal: any = ''
  public produtosTotal: any = ''

  constructor(private listaProdutosService: ListaProdutosService) { }

  ngOnInit(): void {
    this.renderizarLista()
    this.listaProdutosService.emitEvent.subscribe(
      res => alert(`${res} foi adicionado a lista de compras`)
    )
  }
  
  ngDoCheck(): void {
    this.renderizarValorTotal()
  }

  public renderizarLista() {
    if (this.listaProdutos) {
      this.listaProdutos = this.listaProdutosService.mostrarListaProdutos()
    }
  }
  
  public renderizarValorTotal() {
    this.valorTotal = this.listaProdutosService.mostrarValorTotal()
    this.produtosTotal = this.listaProdutos.length
  }

  public apagarItemLista(item: any, value: number) {
    this.listaProdutos.splice(item, 1)
    this.listaProdutosService.subtrairValor(value)
  }

  public apagarLista() {
    this.listaProdutos = []
    alert("Lista apagada com sucesso!")
  }

}
