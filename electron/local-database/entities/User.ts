import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User
{
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		type: 'varchar'
	})
	name: string;
	
	@Column({
		type: 'varchar'
	})
	surname: string;

	@Column({
		type: 'varchar'
	})
	email: string;
}