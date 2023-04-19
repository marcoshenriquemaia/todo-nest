import { Length } from 'class-validator';

export class UpdateTaskDto {
  @Length(3, 50, {
    message: 'name must be between 3 and 20 characters',
  })
  readonly name: string;
  readonly description: string;
  readonly deadLine: Date;
}
