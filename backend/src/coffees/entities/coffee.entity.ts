import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum CoffeeType {
  ARABICA = 'Arabica',
  ROBUSTA = 'Robusta',
}

@Entity('coffees')
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column('text')
  description: string;

  @Column({
    type: 'enum',
    enum: CoffeeType,
  })
  type: CoffeeType;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  imageUrl: string;
}
