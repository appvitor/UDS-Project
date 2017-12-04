import { Produto } 		from './produto';
import { Pedido } 		from './pedido';
import { v4 as uuid } 	from 'uuid';

export class ItemPedido {
	id: uuid;
	produto: Produto;
	quantidade: number;
	precoUnitario: number;
	percentualDesconto: number;
	total: number;
}