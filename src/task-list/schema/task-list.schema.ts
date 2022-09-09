import { Schema } from 'mongoose';
import { TaskList } from '../entities/task-list.entity';

export const TaskListSchema = new Schema<TaskList>({
  description: {type: String},
  tasks: [{
    description: {type: String},
    completed: {type: Boolean},
    favorite: {type: Boolean}
  }],
})

