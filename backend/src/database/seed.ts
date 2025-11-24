import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { seedCoffees } from './seeds/coffee.seed';
import { Coffee } from '../coffees/entities/coffee.entity';

config();

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Coffee],
  synchronize: true, // TODO: switch to false for deployment
});

async function runSeed() {
  try {
    console.log('--- Starting database seed...\n');

    // Initialize connection
    await AppDataSource.initialize();
    console.log('--- Database connection established\n');

    // Drop existing table and enum type to allow clean recreation
    console.log('--- Dropping existing table if exists...\n');
    await AppDataSource.query('DROP TABLE IF EXISTS "coffees" CASCADE;');
    console.log('--- Table dropped successfully\n');

    // Run seeds
    await seedCoffees(AppDataSource);

    // Close connection
    await AppDataSource.destroy();
    console.log('\n ======= Seeding completed successfully! =========');
    process.exit(0);
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  }
}

runSeed();
