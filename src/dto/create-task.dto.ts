import { IsNotEmpty, Length } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({
    message: 'name is required',
  })
  @Length(3, 50, {
    message: 'name must be between 3 and 20 characters',
  })
  readonly name: string;
  readonly description: string;
  @IsNotEmpty({
    message: 'deadLine is required',
  })
  readonly deadLine: Date;
}
