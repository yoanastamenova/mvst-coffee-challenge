import { DataSource } from 'typeorm';
import { Coffee } from '../../coffees/entities/coffee.entity';

export async function seedCoffees(dataSource: DataSource): Promise<void> {
  const coffeeRepository = dataSource.getRepository(Coffee);

  // Clear existing data if any
  const existingCoffees = await coffeeRepository.count();
  if (existingCoffees > 0) {
    console.log('===== Clearing existing coffee data...=====');
    await coffeeRepository.clear();
    console.log('===== Cleared successfully! =====');
  }

  // Inject coffee data
  const coffees = [
    {
      name: 'Espresso',
      description:
        'A strong, concentrated coffee brewed by forcing hot water through finely-ground coffee beans.',
      type: 'Hot',
      price: 3.5,
      imageUrl:
        'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400',
    },
    {
      name: 'Cappuccino',
      description:
        'An espresso-based drink with steamed milk foam, perfect for a morning boost.',
      type: 'Hot',
      price: 4.5,
      imageUrl:
        'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400',
    },
    {
      name: 'Latte',
      description: 'A smooth coffee drink made with espresso and steamed milk.',
      type: 'Hot',
      price: 4.75,
      imageUrl:
        'https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400',
    },
    {
      name: 'Americano',
      description:
        'Espresso diluted with hot water for a lighter coffee experience.',
      type: 'Hot',
      price: 3.25,
      imageUrl:
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400',
    },
    {
      name: 'Iced Coffee',
      description: 'Refreshing cold brew served over ice.',
      type: 'Cold',
      price: 4.0,
      imageUrl:
        'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400',
    },
    {
      name: 'Mocha',
      description: 'A chocolate-flavored variant of a caffè latte.',
      type: 'Hot',
      price: 5.0,
      imageUrl:
        'https://images.unsplash.com/photo-1607260550778-aa9d29444ce1?w=400',
    },
  ];

  await coffeeRepository.save(coffees);
  // Return response in console
  console.log(`Successfully added ${coffees.length} coffees!`);
}
