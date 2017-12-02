import { Injectable } 	from '@angular/core';
import { Observable } 	from 'rxjs/Observable';
import { of } 			from 'rxjs/observable/of';
import { v4 as uuid } 	from 'uuid';

import { MessageService } 	from './message.service'
import { Produto } 			from './produto';
import { PRODUTOS } 		from './mock-produtos';

@Injectable()
export class ProdutoService {

	constructor(private messageService: MessageService) { }

	getProdutos(): Observable<Produto[]> {
		this.messageService.add('ProdutoService: fetched produtos');
		return of(PRODUTOS);
	}

	getProduto(id: uuid): Observable<Produto> {
		this.messageService.add(`ProdutoService: fetched produto id=${id}`);
		return of(PRODUTOS.find(produto => produto.id === id));
	}

}
