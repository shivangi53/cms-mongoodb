import {
  IsNumber,
  IsString,
  MAX,
  Max,
  MaxLength,
  Min,
  MinLength,
} from '@nestjs/class-validator';

export class CreateCourseDto {
  @IsString()
  @MaxLength(10)
  @MinLength(3)
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
  @IsNumber()
  duration: number;
}
