import { Inject, Injectable } from '@nestjs/common';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASKS_REPOSITORY')
    private tasksRepository: typeof Task,
  ) {}

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.findAll<Task>();
  }

  async update(id, data): Promise<any> {
    return this.tasksRepository.update(data, { where: { id: id } });
  }

  async poste(data) {
    return this.tasksRepository.create(data);
  }

  async delete(id) {
    return this.tasksRepository.destroy({ where: { id: id } });
  }
}
