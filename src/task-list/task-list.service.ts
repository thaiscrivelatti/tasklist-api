import { Injectable } from '@nestjs/common';
import { TaskList } from './entities/task-list.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskListService {
  constructor(@InjectModel('TaskList') private readonly taskListModel: Model<TaskList>) {}

  async create(taskList: TaskList) {
    const createdTask = new this.taskListModel(taskList);
    return await createdTask.save();
  }

  async findAll() {
    return await this.taskListModel.find().exec();
  }

  async favorites() {
    let favorites = [];
    (await this.taskListModel.find({ "tasks.favorite": true })).forEach(task => {
      task.tasks.find(value => {
        if (value.favorite)
          favorites.push(value);
      })
    });
    return favorites;
  }

  async findOne(id: string) {
    return await this.taskListModel.findById(id).exec();
  }

  async update(id: string, taskList: TaskList) {
    await this.taskListModel.updateOne({ _id: id }, taskList).exec();
    return this.findOne(id);
  }

  async remove(id: string) {
    return await this.taskListModel.deleteOne({ _id: id }).exec();
  } 
}
