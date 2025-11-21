# MVST Coffee List - Backend API

A RESTful API built with NestJS for managing a coffee catalog. This backend provides endpoints for listing, creating, updating, and deleting coffee items with full validation and database persistence.

## Tech Stack

<div align="center">
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  </a>
  <a href="https://typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://nestjs.com/">
    <img src="https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
  </a>
  <a href="https://www.postgresql.org/">
    <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  </a>
  <a href="https://typeorm.io/">
    <img src="https://img.shields.io/badge/TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white" alt="TypeORM" />
  </a>
  <a href="https://www.docker.com/">
    <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  </a>
</div>

### Why These Technologies?

- **NestJS**: Provides excellent structure, dependency injection, and scalability out of the box
- **TypeORM**: Simplifies database operations with TypeScript support and automatic migrations
- **PostgreSQL**: Reliable, feature-rich relational database perfect for structured data
- **Class-validator**: Type-safe validation that integrates seamlessly with NestJS

## Local Installation

### Prerequisites

- Node.js 18+ (see `.nvmrc`)
- Docker (recommended) or PostgreSQL installed locally
- Npm package manager

### Clone from Git

```bash
git clone https://github.com/yoanastamenova/mvst-coffee-challenge 
cd yoanastamenova-mvst-coffee-challange
```

## Install packages

```bash
npm install
```

## Development Scripts

There are some scripts included in the package.json for development easy purposes.

| Command                  | Description                              |
|--------------------------|------------------------------------------|
| `npm run start:dev:db`   | Start PostgreSQL in Docker               |
| `npm run start:dev`      | Run in development mode  |
| `npm run start:prod`     | Run in production mode                   |
| `npm run build`          | Build the application                    |
| `npm run seed`           | Seed the database with initial data      |
| `npm run lint`           | Lint and fix code                        |
| `npm run format`         | Format code with Prettier                |


### Environment Configuration

Create a `.env` file in the backend folder with the following specifications:

```env
PORT=4000

DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=1234
DB_DATABASE=mvst-coffee-challenge-db
```

### Running the Database

#### Using Docker

```bash
npm run start:dev:db
```

This will run up the same PostgreSQL container with the following configuration as per the requirements:
- Host: `localhost`
- Port: `5432`
- Username: `postgres`
- Password: `1234`
- Database: `mvst-coffee-challenge-db`

### Running the Application

```bash
# Development server
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

The API will be available at `http://localhost:4000`

P.S (Changed from 5000 as per requirements due to MacBook default usage of 5000 for AirPlay sharing)

### Seeding the Database

Populate the database with initial coffee data:

```bash
npm run seed
```

This will insert 6 sample coffees (Espresso, Cappuccino, Latte, Americano, Iced Coffee, and Mocha).

## Database Configuration

### Coffee Entity Schema

| Field       | Type          | Constraints           | Description                    |
|-------------|---------------|-----------------------|--------------------------------|
| id          | number        | Primary Key, Auto     | Unique identifier              |
| name        | string        | Unique, Not Null      | Coffee name                    |
| description | text          | Not Null              | Coffee description             |
| type        | string        | Not Null              | Type (e.g., "Hot", "Cold")     |
| price       | decimal(10,2) | Not Null              | Price in USD                   |
| imageUrl    | string        | Not Null              | URL to coffee image            |

### Database Synchronization

TypeORM is configured with `synchronize: true` in development, which automatically creates/updates tables based on entity definitions. For production, this must be switched to false.

## API Endpoints

### Base URL
```
http://localhost:4000
```

### Endpoints

#### 1. Get All Coffees

```http
GET /coffees
```

**Description**: Retrieves all coffees from the database, ordered by ID in ascending order.

**Response**: `200 OK`
```json
[
  {
    "id": 1,
    "name": "Espresso",
    "description": "A strong, concentrated coffee brewed by forcing hot water through finely-ground coffee beans.",
    "type": "Hot",
    "price": 3.5,
    "imageUrl": "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400"
  }
]
```

---

#### 2. Create New Coffee

```http
POST /coffees/new
```

**Description**: Creates a new coffee. Validates that no coffee with the same name already exists.

**Request Body**:
```json
{
  "name": "Flat White",
  "description": "A velvety smooth coffee with microfoam",
  "type": "Hot",
  "price": 4.25,
  "imageUrl": "https://example.com/flatwhite.jpg"
}
```

**Validation Rules**:
- `name`: Required, must be a string, must be unique
- `description`: Required, must be a string
- `type`: Required, must be a string
- `price`: Required, must be a number, minimum value 0
- `imageUrl`: Required, must be a string

**Success Response**: `201 Created`
```json
{
  "message": "Success! New coffee saved: Flat White",
  "coffee": {
    "id": 7,
    "name": "Flat White",
    "description": "A velvety smooth coffee with microfoam",
    "type": "Hot",
    "price": 4.25,
    "imageUrl": "https://example.com/flatwhite.jpg"
  }
}
```

**Error Response**: `409 Conflict` (if name already exists)
```json
{
  "statusCode": 409,
  "message": "Coffee with name \"Flat White\" already exists",
  "error": "Conflict"
}
```

---

#### 3. Update Coffee

```http
PATCH /coffees/:id
```

**Description**: Updates an existing coffee by ID.

**URL Parameters**:
- `id` (number): Coffee ID to update

**Request Body** (partial update supported):
```json
{
  "price": 4.50,
}
```

**Success Response**: `200 OK`
```json
{
  "message": "Success! Updated coffee saved: Flat White",
  "updatedCoffee": {
    "id": 7,
    "name": "Flat White",
    "description": "A nice description",
    "type": "Hot",
    "price": 4.50,
    "imageUrl": "https://example.com/flatwhite.jpg"
  }
}
```

**Error Response**: `404 Not Found`
```json
{
  "statusCode": 404,
  "message": "Coffee with id \"999\" does not exists",
  "error": "Not Found"
}
```

---

#### 4. Delete Coffee

```http
DELETE /coffees/:id
```

**Description**: Deletes a coffee by ID.

**URL Parameters**:
- `id` (number): Coffee ID to delete

**Success Response**: `200 OK`
```json
{
  "message": "Successfully deleted coffee: Flat White",
  "deletedCoffee": {
    "id": 7,
    "name": "Flat White",
    "description": "A velvety smooth coffee with microfoam",
    "type": "Hot",
    "price": 4.25,
    "imageUrl": "https://example.com/flatwhite.jpg"
  }
}
```

**Error Response**: `404 Not Found`
```json
{
  "statusCode": 404,
  "message": "Coffee with id \"999\" does not exists",
  "error": "Not Found"
}
```

### Architecture Overview

The backend follows NestJS's modular architecture with clear separation of tasks:

- **Entities** (`coffee.entity.ts`): Define database schema using TypeORM decorators
- **Services** (`coffees.service.ts`): Contain business logic, database operations
- **Controllers** (`coffees.controller.ts`): Handle HTTP requests/responses, route definitions
- **DTOs** (`dto/*.ts`): Data Transfer Objects for request validation
- **Modules** (`coffees.module.ts`): Bundle related components together

## Validation

The API uses class-validator decorators for automatic request validation. Invalid requests return `400 Bad Request` with detailed error messages.

Example validation error:
```json
{
  "statusCode": 400,
  "message": [
    "name should not be empty",
    "price must not be less than 0"
  ],
  "error": "Bad Request"
}
```

### Global Validation Configuration

```typescript
// Configured in main.ts
new ValidationPipe({
  whitelist: true,          // Strip properties not in DTO
  forbidNonWhitelisted: true, // Reject unknown properties
  transform: true            // Auto-transform payloads to DTO types
})
```

## Error Handling

The API uses NestJS's built-in HTTP exceptions:

| Status Code | Exception             | Use Case                          |
|-------------|-----------------------|-----------------------------------|
| 400         | BadRequestException   | Validation errors                 |
| 404         | NotFoundException     | Coffee ID not found               |
| 409         | ConflictException     | Duplicate coffee name             |
| 500         | InternalServerError   | Unexpected server errors          |

## CORS Configuration

CORS is enabled for the frontend application:

```typescript
app.enableCors({
  origin: 'http://localhost:3000',
  credentials: true,
});
```

## Future Improvements

- [ ] Add comprehensive unit and e2e tests
- [ ] Implement pagination for coffee list
- [ ] Add filtering and search capabilities
- [ ] Set up proper database migrations for production
- [ ] Add API documentation with Swagger/OpenAPI
- [ ] Containerize the application (Dockerfile)

## Troubleshooting
Some of the most frequent errors I found and their fixes:

### Database Connection Issues

If you encounter database connection errors:

1. Ensure PostgreSQL is running: `npm run start:dev:db`
2. Verify environment variables in `.env`
3. Check if port 5432 is available: `lsof -i :5432`

### Port Already in Use

If port 4000 is occupied:

1. Find the process: `lsof -i :4000`
2. Kill it: `kill -9 <PID>`
3. Or change the port in `.env` and `main.ts`

### Seeding Fails

If seeding fails:
1. Ensure the database is running
2. Verify database credentials in `.env`
3. Check if tables exist (TypeORM should auto-create them)

### Contact

Since you came this far on this looong readme - first of all - Thank you! :) Hope you like what you see and if there is anything unclear or missed please let me know on: 

<a href = "mailto:yoana.stamenovaa@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>  <a href="https://www.linkedin.com/in/yoanastamenova" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

Made with <3 and ☕ from Yoana