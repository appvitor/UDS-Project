import { Cliente } 		from './cliente';
import { v4 as uuid } 	from 'uuid';

export class Pedido { 
	id: uuid;
	numero: number;
	cliente: Cliente;
	emissao: Date;
	total: number;
}