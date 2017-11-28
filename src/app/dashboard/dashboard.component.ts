import { Component, OnInit } from '@angular/core';
import { Produto }			from '../produto';
import { ProdutoService } 	from '../produto.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	produto: Produto[] = [];

	constructor(private ProdutoService: ProdutoService) { }

	ngOnInit() {
		this.getProdutos();
	}

	getProdutos(): void {
		this.produtoService.getProdutos()
			.subscribe(produtos => this.produtos = produtos.slice(1, 5));
	}

}
