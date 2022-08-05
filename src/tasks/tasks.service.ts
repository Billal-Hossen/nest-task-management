import { Get, Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';
import { FilterTaskDto } from './dto/filter.task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { TaskStatus } from './task.model';

@Injectable()
export class TasksService {

  @InjectRepository(Task)
  private taskRepository: Repository<Task>
  // constructor(
  //   @InjectRepository(TaskRepository)
  //   private readonly taskRepository: TaskRepository) { }








  // getAllTask(): Task[] {z
  //   return this.tasks;
  // }


  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

    return found;
  }
  // async getTaskById(id: number): Promise<Task> {
  //   console.log(this.taskRepository)
  //   const findTask = await this.taskRepository.findOneBy({ id })
  //   if (!findTask) {
  //     throw new NotFoundException(`The id of ${id} is not found`)
  //   }
  //   return findTask;

  // }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = new Task()
    task.title = title;
    task.description = description;
    task.status = TaskStatus.OPEN;
    await task.save()

    return task;

  }
  async deleteTaskById(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }

  }
  async updateTaskStatus(id: number, status: TaskStatus): Promise<Task> {
    const task = await this.getTaskById(id);
    task.status = status;
    await task.save();
    return task;
  }

  // filterTask(filterTaskDto: FilterTaskDto): Task[] {
  //   const { status, search } = filterTaskDto;
  //   let tasks = this.getAllTask()
  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search));

  //   }
  //   return tasks;
  // }
}
