import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
	selector: 'app-produtos',
	templateUrl: './produtos.component.html',
	styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

	produtoSelecionado: Produto;
	
	produtos: Produto[];

	constructor(private produtoService: ProdutoService) { }

	ngOnInit() {
		this.getProdutos();
	}

	onSelect(produto: Produto): void {
		this.produtoSelecionado = produto;
	}

	getProdutos(): void {
		this.produtos = this.produtoService.getProdutos();
	}

}
