import { Injectable } 		from '@angular/core';
import { Observable } 		from 'rxjs/Observable';
import { of } 				from 'rxjs/observable/of';
import { v4 as uuid } 		from 'uuid';

import { MessageService } 	from './message.service';
import { Cliente } 			from './cliente';
import { CLIENTES } 		from './mock-clientes';

@Injectable()
export class ClienteService {

	constructor(private messageService: MessageService) { }

	getCliente(id: uuid): Obesevable<Cliente> {
		this.messageService.add(`ClienteService: fetched cliente id=${id}`);
		return of(CLIENTES.find(cliente => cliente.id === id));
	}

	getClientes(): Observable<Cliente[]> {
		this.messageService.add(`ClienteService: fetched clientes);
		return of(CLIENTES);
	}

	putCliente(novoCliente: Cliente): void {
		this.messageService.add(`ClienteService: fetched cliente`);
		CLIENTES.push(novoCliente);
	}

}
