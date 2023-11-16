# Sneaker Collector App

This project is a React web application for managing a collection of sneakers. It includes features such as adding, updating, and deleting sneakers, as well as sorting and searching functionalities.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [API Integration](#api-integration)
- [License](#license)

## Features

- Create a new sneaker with details like name, brand, price, size, and year.
- View a list of sneakers with options to delete and update each sneaker.
- Sort sneakers by year, size, or price with both ascending and descending option.
- Search for sneakers by name or brand.
- Responsive design for a seamless experience on various devices.

## Technologies Used

- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript.
- [Vite](https://vitejs.dev/): Next-generation front-end tooling.
- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [legendapp/state](https://legendapp.com/): Super fast and powerful state library for modern JavaScript apps.
- [styled-components](https://styled-components.com/): CSS-in-JS library for styling components.
- [react-query](https://react-query.tanstack.com/): Hooks for fetching, caching, and updating asynchronous data.
- [axios](https://axios-http.com/): Promise-based HTTP client.

## Getting Started

### Prerequisites

Make sure you have the following tools installed on your machine:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/andrejd1/sneakers-byallmeans.git
   cd sneakers-byallmeans
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. Open your browser and go to [http://localhost:3000/](http://localhost:3000/) to use the application.

## API Integration
The app uses the crudcrud.com service for storing and retrieving sneaker data. Make sure to replace the API URL in the server code with your own instance from crudcrud.com.

## License
This project is licensed under the MIT License