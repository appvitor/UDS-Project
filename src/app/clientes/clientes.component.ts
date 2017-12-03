import { Component, OnInit } 	from '@angular/core';
import { v4 as uuid } 			from 'uuid';

import { Cliente } 				from '../cliente';
import { ClienteService } 		from '../cliente.service';

@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.component.html',
	styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

	novoCliente: Cliente;
	clientes: Cliente[];

	constructor(private clienteService: ClienteService) { }

	ngOnInit() {
  		this.getClientes();
	}

	getClientes(): void {
		this.clienteService.getClientes()
			.subscribe(clientes => this.clientes = clientes);
	}

	putCliente(): void {
		this.clienteService.putCliente(this.novoCliente);
		this.getClientes();
	}

}
