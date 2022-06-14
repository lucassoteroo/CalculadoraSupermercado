import { Component, DoCheck, OnInit } from '@angular/core';
import { ListaProdutosService } from '../../services/lista-produtos.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements DoCheck {

  private listaProdutos: Array<{nomeProduto: string, valorProduto: number}> = []
  constructor(private listaProdutosService: ListaProdutosService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.listaProdutos = this.listaProdutosService.mostrarListaProdutos()
    console.log(this.listaProdutos)
  }

  public addListaProdutos(nomeProduto: string, valorProduto: number) {
    return this.listaProdutosService.addListaProdutos(nomeProduto, valorProduto)
  }

}
