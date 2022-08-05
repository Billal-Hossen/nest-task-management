import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { TasksModule } from './tasks/tasks.module';
import * as config from 'config';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: config.DATABASE.TYPE,
    host: config.DATABASE.HOST,
    port: config.DATABASE.PORT,
    username: config.DATABASE.USER,
    password: config.DATABASE.PASSWORD,
    database: config.DATABASE.DATABASE,
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
  }), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
