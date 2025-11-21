import { Controller, Get, Post, Body } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  async findAll(): Promise<Coffee[]> {
    return this.coffeesService.findAll();
  }

  @Post('new')
  async create(@Body() createCoffeeDto: CreateCoffeeDto) {
    const coffee = await this.coffeesService.create(createCoffeeDto);
    return {
      message: `Success! New coffee saved: ${coffee.name}`,
      coffee,
    };
  }
}
