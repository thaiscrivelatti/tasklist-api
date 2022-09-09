import {Document} from 'mongoose';

export class TaskList extends Document {
  description: string;
  tasks: [
    {
        description: string,
        completed: boolean,
        favorite: boolean
    }
  ];
}
