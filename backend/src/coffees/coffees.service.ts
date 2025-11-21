import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async findAll(): Promise<Coffee[]> {
    //1. Find all coffees and display them as coffees list
    return this.coffeeRepository.find();
  }

  async create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee> {
    //1. Check if this coffee already exists via name
    const existingCoffee = await this.coffeeRepository.findOne({
      where: { name: createCoffeeDto.name },
    });

    //2. If it exists = return error
    if (existingCoffee) {
      throw new ConflictException(
        `Coffee with name "${createCoffeeDto.name}" already exists`,
      );
    }

    //3. Create and save new coffee
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(coffee);
  }
}
