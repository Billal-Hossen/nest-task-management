import { Get, Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

@Injectable()
export class TasksService {
  private tasks:Task[] = [];
  getAllTask ():Task[]{
   return this.tasks;
  }
  
  getTaskById(id:string):Task{
    const findTask = this.tasks.find(task=>task.id===id);
    if(!findTask) {
      return ;
    }
    return findTask;

  }

  createTask(createTaskDto:CreateTaskDto):Task{
    const { title,description} = createTaskDto
    const task:Task={
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN

    }
    this.tasks.push(task);
    return task;

  }
  deleteTaskById(id:string):void{
    this.tasks = this.tasks.filter(task=>task.id!==id);

  }
  updateTask(id:string,status:TaskStatus):Task{
    const task = this.getTaskById(id);
    task.status= status;
   console.log(task.status);
    return task;

  }
}
