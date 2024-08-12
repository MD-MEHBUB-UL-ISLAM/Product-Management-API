# Product Management API

## Overview

This project is a RESTful API built using Node.js, Express, and MySQL. The API provides endpoints for managing products, users, and orders, with features like JWT-based authentication, role-based access control, and order processing. The API is designed to be robust, scalable, and easy to extend with additional functionality.

## Features

- **Product Management**: Create, update, delete, and retrieve products.
- **User Management**: Register, login, and manage user profiles.
- **Order Management**: Create and retrieve orders for authenticated users.
- **Authentication & Authorization**: Secure JWT-based authentication and role-based access control.
- **Pagination & Search**: Paginated product listings and search functionality.
- **Third-Party Payment Integration**: Simulated payment processing.
- **API Documentation**: Fully documented API using Swagger.
- **Testing**: Unit and integration tests using Mocha and Chai.

## API Endpoints

### Product Management

- `GET /products`: Fetch a list of all products.
- `GET /products/:id`: Fetch details of a single product by ID.
- `POST /products`: Add a new product (admin only).
- `PUT /products/:id`: Update an existing product by ID (admin only).
- `DELETE /products/:id`: Remove a product by ID (admin only).

### User Management

- `POST /register`: Register a new user.
- `POST /login`: Log in a user and return a JWT.
- `GET /profile`: Fetch the authenticated user’s profile.
- `PUT /profile`: Update the authenticated user’s profile (except email).

### Order Management

- `POST /orders`: Create a new order for the authenticated user.
- `GET /orders`: Fetch a list of all orders for the authenticated user.
- `GET /orders/:id`: Fetch details of a single order by ID.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MySQL or SQLite (for local development)
- Git

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/product-management-api.git
    cd product-management-api
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root of the project and add the following:

    ```plaintext
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=product_db
    JWT_SECRET=yourjwtsecret
    ```

4. **Database Setup**:

    - For MySQL:
      - Create a database named `product_db` (or as defined in your `.env`).
      - Run migrations to set up the schema:

      ```bash
      npx sequelize-cli db:migrate
      ```

    - For SQLite (optional, for testing):
      - Ensure `DB_DIALECT=sqlite` and `DB_STORAGE=:memory:` are set in your `.env.test`.

5. **Start the server**:

    ```bash
    npm start
    ```

    The server will start on `http://localhost:3000`.

6. **Run Tests**:

    ```bash
    npx mocha tests/*.test.js --timeout 10000
    ```

    This will run the unit and integration tests.

### API Documentation

The API is documented using Swagger. To view the documentation:

- Start the server.
- Navigate to `http://localhost:3000/api-docs` in your browser.

### Deployment

1. **Set up environment variables** on the server using a similar `.env` setup.
2. **Deploy the API** using your preferred method (e.g., Docker, AWS, Heroku).
3. **Provide a live endpoint** for testing and interaction.

### CI/CD Pipeline (Optional)

For continuous integration and deployment:

- Set up a CI/CD pipeline with your preferred tools (GitHub Actions, CircleCI, etc.).
- Ensure automated testing and deployment.

## Usage

### Authentication

- **Register** a new user with `POST /register`.
- **Log in** with `POST /login` to receive a JWT token.
- **Include the JWT token** in the `Authorization` header (as `Bearer token`) for accessing protected routes.

### Admin Role

- To perform product management actions (`POST /products`, `PUT /products/:id`, `DELETE /products/:id`), the user must have an admin role.
- Admin role can be assigned manually in the database (or through an admin management system if implemented).

## Contribution

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! If you encounter any issues, feel free to open an issue or reach out.
