import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  async findAll(): Promise<Coffee[]> {
    //1. Find all coffees and display them as coffees list, ordered by ID
    return this.coffeeRepository.find({
      order: {
        id: 'ASC',
      },
    });
  }

  //NEW COFFEE CREATION
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

  //UPDATE AN EXISTING COFFEE
  async update(id: number, updateCoffeeDto: UpdateCoffeeDto): Promise<Coffee> {
    // 1. Find the coffee by id
    const existingCoffee = await this.coffeeRepository.findOne({
      where: { id },
    });
    // 2. If not found, throw NotFoundException
    if (!existingCoffee) {
      throw new NotFoundException(`Coffee with id "${id}" does not exists`);
    }
    // 3. Merge the updates into the existing coffee
    Object.assign(existingCoffee, updateCoffeeDto);
    // 4. Save and return the updated coffee
    return this.coffeeRepository.save(existingCoffee);
  }

  //DELETE COFFEE
  async remove(id: number): Promise<Coffee> {
    // 1. Find the coffee by id
    const existingCoffee = await this.coffeeRepository.findOne({
      where: { id: id },
    });
    // 2. If not found, throw NotFoundException
    if (!existingCoffee) {
      throw new NotFoundException(`Coffee with id "${id}" does not exists`);
    }
    // 3. Delete the coffee
    return this.coffeeRepository.remove(existingCoffee);
  }
}
