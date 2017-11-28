import { NgModule } 				from '@angular/core';
import { RouterModule, Routes } 	from '@angular/router';

import { DashboardComponent } 		from './dashboard/dashboard.component';
import { ProdutosComponent } 		from './produtos/produtos.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{ path: 'dashboard', 	component: 'DashboardComponent' },
	{ path: 'produtos', 	component: 'ProdutosComponent' },
	{ path: 'detalhes/:id', component: 'ProdutoDetalhesComponent'}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
