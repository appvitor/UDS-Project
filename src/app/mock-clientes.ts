import { Cliente } 		from './cliente';
import { v4 as uuid } 	from 'uuid';

export const CLIENTES: Cliente[] = [
	
	{id: uuid(), nome: 'Vítor P. Corrêa', 		dataNascimento: new Date("May 20, 1994")},
	{id: uuid(), nome: 'Felipe Neto', 			dataNascimento: new Date()},
	{id: uuid(), nome: 'Victor Marson', 		dataNascimento: new Date("October 22, 1996")},
	{id: uuid(), nome: 'Ana Angélica Pires', 	dataNascimento: new Date("November 24, 1968")},
	{id: uuid(), nome: 'Roseli Tessaro', 		dataNascimento: new Date()},
	{id: uuid(), nome: 'Marisa Nobre', 			dataNascimento: new Date()},
	{id: uuid(), nome: 'Marcos Seravalli', 		dataNascimento: new Date()},
	{id: uuid(), nome: 'Eliza Nobre', 			dataNascimento: new Date()},
	{id: uuid(), nome: 'Joceli P. Marcos', 		dataNascimento: new Date()},
	{id: uuid(), nome: 'Fernando Lopes', 		dataNascimento: new Date()}
];