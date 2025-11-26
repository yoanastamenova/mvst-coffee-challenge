# MVST Coffee List - Frontend

This is the frontend of the MVST Coffee Challenge. Built with Next.js framework as per requirements and using TailwindCSS for styling without any component libraries. The versions have been updated upon setup due to parsing errors. If any similar errors are found, please be advised they are not present if the Next.js version is updated to 15+.

## Tech Stack

<div align="center">
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  </a>
  <a href="https://typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  </a>
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="TailwindCSS" />
  </a>
</div>

### Why These Technologies?

- **Next.js**: Provides server-side rendering, excellent developer experience, and built-in routing
- **React**: Component-based architecture for building interactive UIs
- **TailwindCSS**: Utility-first CSS framework that simplifies styling without component libraries
- **TypeScript**: Type safety and better developer experience

## Deployment

**Deployed on Vercel:** [🚀 Click to view 🚀](https://mvst-coffee-challenge-omega.vercel.app/)

**IMPORTANT:** The deployed frontend shows only a static UX/UI Next view and does not load any content due to missing backend deployment

## Local Installation

### Prerequisites

- Node.js 18+ (see `.nvmrc` in root directory)
- npm package manager
- Backend server running up and running for API Calls (see [Backend README](../backend/README.md))

### Clone from Git

```bash
git clone https://github.com/yoanastamenova/mvst-coffee-challenge 
cd yoanastamenova-mvst-coffee-challange
```

## Install packages

```bash
npm install
```

## Environment Configuration

Create a `.env` file in the frontend folder with the following:

```env
BACKEND_URL=http://localhost:4000
```

**Note**: Make sure the backend server is running on port 4000 before starting the frontend.

## Development Scripts

| Command                  | Description                              |
|--------------------------|------------------------------------------|
| `npm run dev`            | Start development server on localhost:3000 |
| `npm run build`          | Build the application for production     |
| `npm run lint`           | Lint and fix code syntax errors          |

## Running the Application

1. Ensure the backend server is running (see [Backend README](../backend/README.md))
2. Start the development server for the frontend in the root:
```bash
npm run dev
```
3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Features

### 1. Coffee List View
- Displays all coffees from the backend API
- Filter by coffee type (All, Arabica, Robusta)
- Responsive grid layout (1 column mobile, 3 desktop)
- Coffee cards with image, name, price, description, and type badge

### 2. Create Coffee Form
- Form to add new coffee with validation
- Fields: Name, Price, Type (Arabica/Robusta), Image URL, Description
- Duplicate name validation (shows alert if name exists)
- Mobile-responsive design

## Future Improvements

- [ ] Add comprehensive unit and e2e tests
- [ ] Add animations with Framer Motion
- [ ] Implement pagination for coffee list
- [ ] Add delete/edit functionality for coffees
- [ ] Containerize the application (Dockerfile)


### Contact

Since you came this far on this looong readme - first of all - Thank you! :) Hope you like what you see and if there is anything unclear or missing please let me know on: 

<a href = "mailto:yoana.stamenovaa@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>  <a href="https://www.linkedin.com/in/yoanastamenova" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>

Made with <3 and ☕ from Yoana