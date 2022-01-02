import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAll() {
    return this.taskService.findAll();
  }

  @Put('/:id')
  updateTask(@Param('id') id: number, @Body() data) {
    return this.taskService.update(id, data);
  }

  @Post()
  addTask(@Body() data) {
    return this.taskService.poste(data);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: number) {
    return this.taskService.delete(id);
  }
}
