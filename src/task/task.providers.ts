import { Task } from './task.model';

export const tasksProviders = [
  {
    provide: 'TASKS_REPOSITORY',
    useValue: Task,
  },
];
