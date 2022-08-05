import { TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create.task.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Task } from './task.entity';

import { TasksService } from './tasks.service';
import { TaskStatusValidationPipe } from './pipes/validationPipe/task.status.validation.pipe';
import { FilterTaskDto } from './dto/filter.task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {

  }
  // @Get()
  // getAllTask(@Query(ValidationPipe) filterTaskDto: FilterTaskDto): Task[] {
  //   if (Object.keys(filterTaskDto).length) {
  //     return this.taskService.filterTask(filterTaskDto)
  //   } else {
  //     return this.taskService.getAllTask()
  //   }



  // }

  @Get("/:id")
  async getTaskById(@Param("id", ParseIntPipe) id: number): Promise<Task> {

    return this.taskService.getTaskById(id)

  }
  @Delete("/:id")
  async deleteTaskById(@Param("id", ParseIntPipe) id: string): Promise<void> {

    return await this.taskService.deleteTaskById(id)

  }
  @Patch("/:id/status")
  async updateTaskStatus(@Param("id", ParseIntPipe) id: number, @Body("status", TaskStatusValidationPipe) status: TaskStatus): Promise<Task> {
    return this.taskService.updateTaskStatus(id, status)

  }
  @Post()
  @UsePipes(ValidationPipe)
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {

    return this.taskService.createTask(createTaskDto)

  }
}


