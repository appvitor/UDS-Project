import { Cliente } 		from './cliente';
import { ItemPedido } 	from './itemPedido';
import { v4 as uuid } 	from 'uuid';

export class Pedido { 
	id: uuid;
	numero: number;
	cliente: Cliente;
	itemPedido: ItemPedido[];
	emissao: Date;
	total: number;
}