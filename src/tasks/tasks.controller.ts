import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService:TasksService){
 
  }
  @Get()
  getAllTask():Task[]{
   return this.taskService.getAllTask()

  }
  @Post()
  createTask(@Body("title") title:string,@Body("description") description:string,):Task{
    console.log(title,description);
    return this.taskService.createTask(title,description)

  }
}


