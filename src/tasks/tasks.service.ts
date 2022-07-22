import { Get, Injectable, NotFoundException } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';
import { FilterTaskDto } from './dto/filter.task.dto';

@Injectable()
export class TasksService {
  private tasks:Task[] = [];
  getAllTask ():Task[]{
   return this.tasks;
  }
  
  getTaskById(id:string):Task{
    const findTask = this.tasks.find(task=>task.id===id);
    if(!findTask) {
      throw new NotFoundException()
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
    const found= this.getTaskById(id)
    this.tasks = this.tasks.filter(task=>task.id!==found.id);

  }
  updateTask(id:string,status:TaskStatus):Task{
    const task = this.getTaskById(id);
    task.status= status;
   console.log(task.status);
    return task;

  }
  filterTask(filterTaskDto:FilterTaskDto):Task[]{
    const {status,search} = filterTaskDto;
    let tasks = this.getAllTask()
if(status){
  tasks= tasks.filter(task=>task.status===status);
}
if(search){
  tasks = tasks.filter(task=>task.title.includes(search)||task.description.includes(search));

}
    return tasks;
  }
}
