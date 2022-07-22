import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { TaskStatus } from "src/tasks/task.model";

export class TaskStatusValidationPipe implements PipeTransform{
  readonly allowedStatus=[
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE
  ]
  transform(value: any, metadata: ArgumentMetadata) {
    value =value.toUpperCase();
    if(!this.isValidStatus(value)) throw new BadRequestException(`Status ${value} is not valid`)
    return value;

  }
  private isValidStatus(status:any){
    const idx = this.allowedStatus.indexOf(status)

    return idx !==-1;

  }
}