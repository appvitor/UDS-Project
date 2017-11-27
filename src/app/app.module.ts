import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoService } from './produto.service'

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoDetalhesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ ProdutoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
