import { Injectable } from '@angular/core';
import { Observable } 		from 'rxjs/Observable';
import { of } 				from 'rxjs/observable/of';
import { v4 as uuid } 		from 'uuid';

import { MessageService } 	from './message.service'
import { Pedido } 			from './pedido';
import { PEDIDOS }	 		from './mock-pedidos';

@Injectable()
export class PedidoService {

	constructor(private messageService: MessageService) { }

	getPedido(id: uuid): Observable<Pedido> {	
		this.messageService.add(`PedidoService: fetched pedido id=${id}`);
		return of(PEDIDOS.find(pedido => pedido.id === id));
	}

	getPedidos(): Observable<Pedido[]> {
		this.messageService.add(`PedidoService: fetched pedidos`);
		return of(PEDIDOS);
	}

	putPedido(novoPedido: Pedido): void {
		this.messageService.add(`PedidoService: fetched pedido`);
		PEDIDOS.push(novoPedido);
	}

}
