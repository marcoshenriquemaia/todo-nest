import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { TaskController } from 'src/controllers';
import { TaskService } from 'src/services';
import { taskProviders } from 'src/providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [TaskService, ...taskProviders],
})
export class TaskModule {}
