import { Component, OnInit } 	from '@angular/core';
import { Produto } 				from '../produto';
import { ProdutoService } 		from '../produto.service';
import { v4 as uuid } 			from 'uuid';

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.component.html',
	styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
	
	novoProduto: Produto;
	produtos: Produto[];

	constructor(private produtoService: ProdutoService) { }

	ngOnInit() {
		this.getProdutos();
	}

	getProdutos(): void {
		this.produtoService.getProdutos()
			.subscribe(produtos => this.produtos = produtos);
	}

	putProduto(): void {
		this.produtoService.putProduto(this.novoProduto);
		this.getProdutos();
	}

}
