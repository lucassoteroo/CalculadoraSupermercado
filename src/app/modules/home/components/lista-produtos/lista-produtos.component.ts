import { Component, OnInit } from '@angular/core';
import { ListaProdutosService } from '../../services/lista-produtos.service';

@Component({
  selector: 'app-lista-produtos',
  templateUrl: './lista-produtos.component.html',
  styleUrls: ['./lista-produtos.component.scss']
})
export class ListaProdutosComponent implements OnInit {

  public listaProdutos: Array<{nomeProduto: string, valorProduto: number}> = []
  constructor(private listaProdutosService: ListaProdutosService) { }

  ngOnInit(): void {
    this.renderizarLista()
    this.listaProdutosService.emitEvent.subscribe(
      res => alert(`${res} foi adicionado a lista de compras`)
    )
  }

  public renderizarLista() {
    if (this.listaProdutos) {
      this.listaProdutos = this.listaProdutosService.mostrarListaProdutos()
    }
  }

  public apagarItemLista(item: any) {
    this.listaProdutos.splice(item, 1)
  }
}
