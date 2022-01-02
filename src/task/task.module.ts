import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database.module';
import { TaskController } from './task.controller';
import { tasksProviders } from './task.providers';
import { TaskService } from './task.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [TaskService, ...tasksProviders],
})
export class TaskModule {}
