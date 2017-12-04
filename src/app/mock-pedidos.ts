import { Pedido } 			from './pedido';
import { Cliente } 			from './cliente';
import { ClienteService } 	from './cliente.service';
import { v4 as uuid } 		from 'uuid';

export var clienteService: ClienteService;

export const PEDIDOS: Pedido[] = [

	{id: uuid(), numero: 1, cliente: (clienteService.getClientes())[0], emissao: new Date(), total: 0 },
	{id: uuid(), numero: 2, cliente: (clienteService.getClientes())[1], emissao: new Date(), total: 0 }, 
	{id: uuid(), numero: 3, cliente: (clienteService.getClientes())[2], emissao: new Date(), total: 0 },
	{id: uuid(), numero: 4, cliente: (clienteService.getClientes())[3], emissao: new Date(), total: 0 },
	{id: uuid(), numero: 5, cliente: (clienteService.getClientes())[3], emissao: new Date(), total: 0 },
	{id: uuid(), numero: 6, cliente: (clienteService.getClientes())[4], emissao: new Date(), total: 0 },
	{id: uuid(), numero: 7, cliente: (clienteService.getClientes())[6], emissao: new Date(), total: 0 },
	{id: uuid(), numero: 8, cliente: (clienteService.getClientes())[6], emissao: new Date(), total: 0 },
	{id: uuid(), numero: 9, cliente: (clienteService.getClientes())[6], emissao: new Date(), total: 0 }
];