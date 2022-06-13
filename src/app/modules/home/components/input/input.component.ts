import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Output() public emitItemProduto = new EventEmitter
  public novoProduto: {nome: string, valor: any} = {nome: '', valor: ''} 
  public nomeProduto: string = ""
  public valorProduto: any = ""

  constructor() { }

  ngOnInit(): void {
  }

  public enviarProduto() {
    this.nomeProduto = this.nomeProduto.trim()
    if (this.nomeProduto && this.valorProduto) {
      this.novoProduto.nome = this.nomeProduto
      this.novoProduto.valor = this.valorProduto
      this.emitItemProduto.emit(this.novoProduto)
    }
  }

}
