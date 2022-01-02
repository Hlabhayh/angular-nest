import { Sequelize } from 'sequelize-typescript';
import { Task } from './task/task.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Labhayh062165044',
        database: 'daily_tasks',
      });
      sequelize.addModels([Task]);
      await sequelize.sync({ alter: true });
      return sequelize;
    },
  },
];
