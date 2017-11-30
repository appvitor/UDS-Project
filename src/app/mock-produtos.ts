import { Produto } 		from './produto';
import { v4 as uuid } 	from 'uuid';

export const PRODUTOS: Produto[] = [

	{id: uuid(), codigo: "2", nome: 'Banana', precoUnitario: 3.45},
	{id: uuid(), codigo: "3", nome: 'Uva', precoUnitario: 4.00}, 
	{id: uuid(), codigo: "4", nome: 'Pepino Japonês', precoUnitario: 4.10},
	{id: uuid(), codigo: "5", nome: 'Chocolate', precoUnitario: 5.00},
	{id: uuid(), codigo: "6", nome: 'Miojo', precoUnitario: 2.35},
	{id: uuid(), codigo: "7", nome: 'Bandeja de Sushi', precoUnitario: 9.70},
	{id: uuid(), codigo: "8", nome: 'Macarrão', precoUnitario: 4.20},
	{id: uuid(), codigo: "9", nome: 'Cereal', precoUnitario: 7.19},
	{id: uuid(), codigo: "10", nome: 'Peça de Salmão', precoUnitario: 23.95}
];