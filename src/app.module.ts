import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { databaseProviders } from './database.providers';

@Module({
  imports: [TaskModule],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule {}
