import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './components/header/header.component';
import { InputProdutoComponent } from './components/input-produto/input-produto.component';
import { InputValorComponent } from './components/input-valor/input-valor.component';
import { ListaProdutosComponent } from './components/lista-produtos/lista-produtos.component';

// Pages
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    HeaderComponent,
    InputProdutoComponent,
    InputValorComponent,
    ListaProdutosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
