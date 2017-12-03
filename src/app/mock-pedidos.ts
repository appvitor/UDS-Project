import { Pedido } 		from './pedido';
import { Cliente } 		from './cliente';
import { v4 as uuid } 	from 'uuid';

export const PEDIDOS: Pedido[] = [

	{id: uuid(), numero: 1, cliente: { }, emissao: new Date(), total: 0 },
	{id: uuid(), numero: 2, cliente: { }, emissao: new Date(), total: 0 }, 
	{id: uuid(), numero: 3, cliente: { }, emissao: new Date(), total: 0 },
	{id: uuid(), numero: 4, cliente: { }, emissao: new Date(), total: 0 },
	{id: uuid(), numero: 5, cliente: { }, emissao: new Date(), total: 0 },
	{id: uuid(), numero: 6, cliente: { }, emissao: new Date(), total: 0 },
	{id: uuid(), numero: 7, cliente: { }, emissao: new Date(), total: 0 },
	{id: uuid(), numero: 8, cliente: { }, emissao: new Date(), total: 0 },
	{id: uuid(), numero: 9, cliente: { }, emissao: new Date(), total: 0 }
];