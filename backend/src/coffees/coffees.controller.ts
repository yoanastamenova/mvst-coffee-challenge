import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

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

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    const updatedCoffee = await this.coffeesService.update(id, updateCoffeeDto);
    return {
      message: `Success! Updated coffee saved: ${updatedCoffee.name}`,
      updatedCoffee,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deletedCoffee = await this.coffeesService.remove(id);
    return {
      message: `Successfully deleted coffee: ${deletedCoffee.name}`,
      deletedCoffee,
    };
  }
}
