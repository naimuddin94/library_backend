# Library Management System API

## Overview

The Library Management System Backend API is designed to help library staff and members manage books, memberships, and borrowing activities. It supports essential operations like adding and removing books, registering members, and tracking borrow and return activities. This backend API forms the foundation for a full-featured library management system, automating key processes to improve operational efficiency and inventory accuracy.

## Technologies

- Express.js
- Prisma ORM
- PostgreSQL
- TypeScript

## Key Features & Functionality

- **Books Management**: Add, update, view, and delete books in the library.
- **Member Management**: Register, update, and delete library members.
- **Borrowing and Returning**: Track book borrowing and returning, updating inventory accordingly.
- **Detailed Records**: Maintain records of borrowing activities, including the borrowed date and return status.
- **Error Handling**: Comprehensive error handling for all CRUD operations.

## Project Structure - MVC Pattern

```
Library Management System
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
- yarn
- Postgres

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

[![Live Link](https://img.shields.io/badge/API-Live-brightgreen?style=for-the-badge)](https://library-backend-sigma.vercel.app/)

[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/34122341/2sAY545y4Q)

## Database Diagram

![Diagram](https://res.cloudinary.com/dxoncladp/image/upload/v1731348384/library-ORM-diagram_jk4u4k.png)
