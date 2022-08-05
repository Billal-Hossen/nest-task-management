import { TaskStatus } from 'src/tasks/task.model';
import { IsIn, IsNotEmpty, IsOptional } from "class-validator";


export class FilterTaskDto{
  @IsOptional()
  @IsIn([TaskStatus.OPEN,TaskStatus.IN_PROGRESS,TaskStatus.DONE])
  status:TaskStatus;
  @IsOptional()
  @IsNotEmpty()
  search:string;
}