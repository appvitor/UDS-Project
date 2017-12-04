import { Component, OnInit } 	from '@angular/core';
import { v4 as uuid } 			from 'uuid';

import { ItemPedido } 			from '../itemPedido';
import { Pedido } 				from '../pedido';

@Component({
	selector: 'app-itens-pedido',
	templateUrl: './itens-pedido.component.html',
	styleUrls: ['./itens-pedido.component.css']
})
export class ItensPedidoComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
	
}