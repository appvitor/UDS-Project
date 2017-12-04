import { Component, OnInit } 	from '@angular/core';
import { v4 as uuid } 			from 'uuid';

import { Pedido } 				from '../pedido';
import { PedidoService } 		from '../pedido.service';

@Component({
	selector: 'app-pedidos',
	templateUrl: './pedidos.component.html',
	styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

	novoPedido: Pedido;
	pedidos: Pedido[];

	constructor(private pedidoService: PedidoService) { }

	ngOnInit() {
		this.getPedidos();
	}

	getPedidos(): void {
		this.pedidoService.getPedidos()
			.subscribe(pedidos => this.pedidos = pedidos);
	}

	putPedido(): void {
		this.novoPedido.id = uuid();
		this.pedidoService.putPedido(this.novoPedido);
		this.getPedidos();
	}

}
