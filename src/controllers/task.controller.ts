import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from 'src/dto';
import { TaskService } from 'src/services';

@Controller('task')
export class TaskController {
  constructor(private readonly appService: TaskService) {}

  @Get()
  list() {
    return this.appService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.appService.get(id);
  }

  @Post()
  create(@Body() body: CreateTaskDto) {
    return this.appService.create(body);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    return this.appService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.appService.delete(id);
  }
}
