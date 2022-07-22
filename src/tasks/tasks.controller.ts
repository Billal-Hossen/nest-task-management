import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService:TasksService){
 
  }
  @Get()
  getAllTask():Task[]{
   return this.taskService.getAllTask()

  }
  @Get("/:id")
  getTaskById(@Param("id") id:string):Task{

    return this.taskService.getTaskById(id)

  }
  @Delete("/:id")
  deleteTaskById(@Param("id") id:string):void{

    return this.taskService.deleteTaskById(id)

  }
  @Patch("/:id/status")
  updateTask(@Param("id")id:string, @Body("status") status:TaskStatus):Task{
   return this.taskService.updateTask(id,status)

  }
  @Post()
  createTask(@Body() createTaskDto:CreateTaskDto):Task{
    
    return this.taskService.createTask(createTaskDto)

  }
}


