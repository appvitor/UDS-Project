import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } 			from '@angular/router';
import { Location } 				from '@angular/common';

import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
	selector: 'app-produto-detalhes',
	templateUrl: './produto-detalhes.component.html',
	styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

	@Input() produto: Produto;
	
	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private produtoService: ProdutoService
	) { }

	ngOnInit() {
		this.getProduto();
	}

	getProduto() {
		const id = +this.route.snapshot.paramMap.get('id');
		this.produtoService.getProduto(id)
			.subscribe(produto => this.produto = produto);
	}

}
