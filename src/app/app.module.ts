import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoService } from './produto.service';

import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoDetalhesComponent
  ],
  providers: [ ProdutoService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
