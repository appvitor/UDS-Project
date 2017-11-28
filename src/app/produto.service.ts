import { Injectable } from '@angular/core';
import { produto } from './produto';
import { PRODUTOS } from './mock-produtos';

@Injectable()
export class ProdutoService {

	constructor() { }

	getProdutos(): Produto[] {
		return PRODUTOS;
	}

	getProduto(id: UUID): Observable<Produto> {
		this.messageService.add('ProdutoService: fetched produto id=${id}');
		return of(PRODUTOS.find(produto => produto.id === id));
	}

}
