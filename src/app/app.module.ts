import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { v4 as uuid }    from 'uuid';

import { AppComponent }             from './app.component';
import { DashboardComponent }       from './dashboard/dashboard.component'
import { ProdutosComponent }        from './produtos/produtos.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoService }           from './produto.service';

import { AppRoutingModule }   from './app-routing.module';
import { MessagesComponent }  from './messages/messages.component';
import { MessageService }     from './message.service';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProdutosComponent,
    ProdutoDetalhesComponent,
    DashboardComponent,
    MessagesComponent,
    ClientesComponent
  ],
  providers: [ ProdutoService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
