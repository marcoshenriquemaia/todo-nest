import { Model, UpdateWriteOpResult } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Task } from 'src/interfaces';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto';

@Injectable()
export class TaskService {
  constructor(
    @Inject('TASK_MODEL')
    private taskModel: Model<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async get(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async update(
    id: string,
    createTaskDto: UpdateTaskDto,
  ): Promise<UpdateWriteOpResult> {
    return this.taskModel
      .updateOne({ _id: id }, createTaskDto, {
        returnOriginal: false,
      })
      .exec();
  }

  async delete(id: string): Promise<unknown> {
    return this.taskModel.deleteOne({ _id: id }).exec();
  }
}
