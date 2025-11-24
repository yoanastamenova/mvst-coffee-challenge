import { DataSource } from 'typeorm';
import { Coffee, CoffeeType } from '../../coffees/entities/coffee.entity';

export async function seedCoffees(dataSource: DataSource): Promise<void> {
  const coffeeRepository = dataSource.getRepository(Coffee);

  // Clear existing data if any
  const existingCoffees = await coffeeRepository.count();
  if (existingCoffees > 0) {
    console.log('===== Clearing existing coffee data...=====');
    await coffeeRepository.clear();

    // Reset the auto-increment sequence to start from 1
    await dataSource.query(`ALTER SEQUENCE coffees_id_seq RESTART WITH 1;`);
    console.log('===== Cleared successfully! =====');
  }

  // Inject coffee data
  const coffees = [
    {
      name: 'Dark Roast',
      description: 'Free in the MVST office',
      type: CoffeeType.ARABICA,
      price: 19.0,
      imageUrl: 'https://ibb.co/nqFs35yV',
    },
    {
      name: 'Americano',
      description: 'Free in the MVST office',
      type: CoffeeType.ROBUSTA,
      price: 20.0,
      imageUrl: 'https://ibb.co/TBCftYtL',
    },
    {
      name: 'Cappucino',
      description: 'Free in the MVST office',
      type: CoffeeType.ARABICA,
      price: 15.0,
      imageUrl: 'https://ibb.co/nqFs35yV',
    },
    {
      name: 'Decaf Americano',
      description: 'Free in the MVST office',
      type: CoffeeType.ROBUSTA,
      price: 20.0,
      imageUrl: 'https://ibb.co/TBCftYtL',
    },
    {
      name: 'Pine Roast',
      description: 'Free in the MVST office',
      type: CoffeeType.ARABICA,
      price: 19.0,
      imageUrl: 'https://ibb.co/nqFs35yV',
    },
    {
      name: 'Raphael Original',
      description: 'Free in the MVST office',
      type: CoffeeType.ARABICA,
      price: 15.0,
      imageUrl: 'https://ibb.co/nqFs35yV',
    },
  ];

  await coffeeRepository.save(coffees);
  // Return response in console
  console.log(`Successfully added ${coffees.length} coffees!`);
}
