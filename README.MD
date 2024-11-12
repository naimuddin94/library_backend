# Library Management System API

## Objective
Develop a backend API for a Library Management System that allows library staff and members to manage books, memberships, and borrowing activities. The API supports CRUD operations for books, members, and borrow records, along with additional endpoints for borrowing and returning books.

## Technologies
- Express.js
- Prisma ORM
- PostgreSQL
- TypeScript

## Database Schema
Each table uses UUID as the primary key.

[![Live Link](https://img.shields.io/badge/API-Live-brightgreen?style=for-the-badge)](https://mechanical-keyboard-shop-server-two.vercel.app/)


## Project Structure - MVC Pattern

```
Mechanical Keyboard Shop
├── src
│   ├── app
│   │   ├── modules
│   │   │   ├── controllers
│   │   │   ├── models
│   │   │   ├── services
│   │   │   ├── routes
│   │   └── app.ts
├── .env.example
├── package.json
└── tsconfig.json
```

### Controllers
Handles incoming requests and interacts with the service layer.

### Models
Defines the data schema and structure using Mongoose.

### Routes
Defines the application endpoints and associates them with controllers.

### Services
Contains the business logic and interacts with the data layer.

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/naimuddin94/library_backend.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd library_backend
   ```

3. **Install dependencies**

   ```bash
   yarn install
   ```

4. **Set environment variables**

   Create a `.env` file in the root directory following the `.env.example` file and fill in the required variables.

5. **Start the server**

   ```bash
   yarn dev
   ```

6. **Build the project**

   ```bash
   yarn build
   ```

## API Documentation

The API documentation is available through Postman. It provides detailed information on the available endpoints, request formats, and response structures.

[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/34122341/2sAY545y4Q)

## Database Diagram

![Diagram](https://res.cloudinary.com/dxoncladp/image/upload/v1731348384/library-ORM-diagram_jk4u4k.png)