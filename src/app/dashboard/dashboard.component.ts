import { Component, OnInit } 	from '@angular/core';
import { Produto } 				from '../produto';
import { ProdutoService } 		from '../produto.service';
import { Cliente } 				from '../cliente';
import { ClienteService } 		from '../cliente.service';
import { Pedido } 				from '../pedido';
import { PedidoService } 		from '../pedido.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	produtos: Produto[] = [];
	clientes: Cliente[] = [];
	pedidos: Pedido[] = [];

	constructor(
		private produtoService: ProdutoService, 
		private clienteService: ClienteService,
		private pedidoService: PedidoService
	) { }

	ngOnInit() {
		this.getProdutos();
		this.getClientes();
		this.getPedidos();
	}

	getProdutos(): void {
		this.produtoService.getProdutos()
			.subscribe(produtos => this.produtos = produtos.slice(0, 5));
	}

	getClientes(): void {
		this.clienteService.getClientes()
			.subscribe(clientes => this.clientes = clientes.slice(0, 5));
	}

	getPedidos(): void {
		this.pedidoService.getPedidos()
			.subscribe(pedidos => this.pedidos = pedidos.slice(0, 5));
	}

}
