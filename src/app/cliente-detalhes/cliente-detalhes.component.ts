import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } 			from '@angular/router';
import { Location } 				from '@angular/common';
import { v4 as uuid } 				from 'uuid';

import { Cliente } 			from '../cliente'; 
import { ClienteService } 	from '../cliente.service';

@Component({
	selector: 'app-cliente-detalhes',
	templateUrl: './cliente-detalhes.component.html',
	styleUrls: ['./cliente-detalhes.component.css']
})
export class ClienteDetalhesComponent implements OnInit {

	@Input() cliente: Cliente;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private clienteService: ClienteService,
	) { }

	ngOnInit(): void {
		this.getCliente();
	}

	getCliente(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.clienteService.getCliente(id)
			.subscribe(cliente => this.cliente = cliente);
	}

	voltarPagina(): void {
		this.location.back();
	}
}
