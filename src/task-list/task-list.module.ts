import { Module } from '@nestjs/common';
import { TaskListService } from './task-list.service';
import { TaskListController } from './task-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskListSchema } from './schema/task-list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'TaskList', schema: TaskListSchema },
    ]),
  ],
  controllers: [TaskListController],
  providers: [TaskListService]
})
export class TaskListModule {}
