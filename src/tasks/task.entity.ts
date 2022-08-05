import { TaskStatus } from 'src/tasks/task.model';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';


@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;


}
