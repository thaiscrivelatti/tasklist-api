import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TaskListService } from './task-list.service';
import { TaskList } from './entities/task-list.entity';

@Controller('task-list')
export class TaskListController {
  constructor(private readonly taskListService: TaskListService) {}

  @Post()
  create(@Body() taskList: TaskList) {
    return this.taskListService.create(taskList);
  }

  @Get()
  findAll() {
    return this.taskListService.findAll();
  }

  @Get('/favorites')
  favorites() {
    return this.taskListService.favorites();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskListService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskList: TaskList) {
    return this.taskListService.update(id, taskList);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskListService.remove(id);
  }


}
