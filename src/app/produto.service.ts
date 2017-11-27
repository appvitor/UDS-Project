import { Injectable } from '@angular/core';
import { produto } from './produto';
import { PRODUTOS } from './mock-produtos';

@Injectable()
export class ProdutoService {

	constructor() { }

	getProdutos(): Produto[] {
		return PRODUTOS;
	}

}
