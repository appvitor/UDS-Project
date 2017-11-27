import { NgModule } 			from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosComponent } 		from './produtos/produtos.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';

const routes: Routes = [
	{ path: 'produtos', component: 'ProdutosComponent' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
