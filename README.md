# React Frontend

This project is the frontend of a web application built with React. It communicates with a Flask backend to fetch and display data such as customers, employees, products, and orders.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Routes](#api-routes)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```bash
    cd react_frontend
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To start the development server, run:
```bash
npm start

react_frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── api/
│   │   └── axios.js
│   ├── components/
│   │   └── ...
│   ├── pages/
│   │   ├── CustomersPage.js
│   │   ├── CustomerOrdersPage.js
│   │   ├── CreateOrderPage.js
│   │   ├── EmployeesPage.js
│   │   ├── HomePage.js
│   │   ├── OrdersPage.js
│   │   └── ProductsPage.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md


API Routes
The frontend communicates with the following API routes on the Flask backend:

GET /api/customers: Fetch all customers
GET /api/employees: Fetch all employees
GET /api/products: Fetch all products
GET /api/orders: Fetch all orders
GET /api/orders/customer/:customerId: Fetch orders for a specific customer
POST /api/orders: Create a new order
Make sure the Flask backend is running and accessible for the frontend to communicate with it.
