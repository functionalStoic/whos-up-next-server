import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './Category';
import { Event } from './Event';
import { getConnection } from 'typeorm';

interface IProps {
  firstName: string;
  lastName: string;
  description: string;
  category: number;
}

@Entity()
export class Person {
  static create(props: IProps) {
    const person = Object.assign(new Person(), props);
    return getConnection().manager.save(person);
  }

  static new(props: IProps) {
    const person = new Person();
    return Object.assign(person, props);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(type => Category, category => category.people)
  category: Promise<Category>;

  @ManyToMany(type => Event, event => event.people)
  events: Promise<Event[]>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
