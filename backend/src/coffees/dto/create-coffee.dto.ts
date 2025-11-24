import { IsString, IsNotEmpty, IsNumber, Min, IsEnum } from 'class-validator';
import { CoffeeType } from '../entities/coffee.entity';

export class CreateCoffeeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(CoffeeType, {
    message: 'type must be either Arabica or Robusta',
  })
  type: CoffeeType;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  @IsNotEmpty()
  imageUrl: string;
}
