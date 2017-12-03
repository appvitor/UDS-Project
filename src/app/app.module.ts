import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { v4 as uuid }    from 'uuid';

import { AppRoutingModule }   from './app-routing.module';
import { MessagesComponent }  from './messages/messages.component';
import { MessageService }     from './message.service';

import { AppComponent }             from './app.component';
import { DashboardComponent }       from './dashboard/dashboard.component'
import { ProdutosComponent }        from './produtos/produtos.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoService }           from './produto.service';
import { ClientesComponent }        from './clientes/clientes.component';
import { ClienteService }           from './cliente.service';
import { ClienteDetalhesComponent } from './cliente-detalhes/cliente-detalhes.component';
import { PedidosComponent } from './pedidos/pedidos.component';

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
    ClientesComponent,
    ClienteDetalhesComponent,
    PedidosComponent
  ],
  providers: [ ProdutoService, ClienteService, MessageService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
