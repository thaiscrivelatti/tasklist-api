import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskListModule } from './task-list/task-list.module';
import { MongooseModule } from '@nestjs/mongoose';

ConfigModule.forRoot();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    TaskListModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
