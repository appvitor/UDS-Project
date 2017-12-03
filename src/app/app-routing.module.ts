import { NgModule } 				from '@angular/core';
import { RouterModule, Routes } 	from '@angular/router';

import { DashboardComponent } 		from './dashboard/dashboard.component';
import { ProdutosComponent } 		from './produtos/produtos.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ClientesComponent } 		from './clientes/clientes.component';
import { ClienteDetalhesComponent } from './cliente-detalhes/cliente-detalhes.component';
import { PedidosComponent } 		from './pedidos/pedidos.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'produtoDetalhes/:id', component: ProdutoDetalhesComponent },
	{ path: 'produtos', component: ProdutosComponent },
	{ path: 'clientes', component: ClientesComponent },
	{ path: 'clienteDetalhes/:id', component: ClienteDetalhesComponent },
	{ path: 'pedidos', component: PedidosComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
