import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('item')
export class Item
{
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'text'
	})
	name: string;

	@Column({
		type: 'boolean',
		default: false
	})
	done: boolean
}