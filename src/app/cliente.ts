import { v4 as uuid } from 'uuid';

export class Cliente {
	id: uuid;
	nome: string;
	dataNascimento: Date;
}