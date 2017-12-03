import { v4 as uuid } from 'uuid';

export class Produto {
	id: uuid;
	codigo: string;
	nome: string;
	precoUnitario: number;
}