# Stock and Crypto Prices Frontend

This project is a Next.js application with TypeScript, Redux, and Redux Persist to display real-time stock and cryptocurrency prices.

## Features

- Fetch and display the most recent 20 real-time data entries for a particular stock or cryptocurrency from a MongoDB database.
- Dynamic table updating in real-time with new data.
- Modal popup to change the stock or cryptocurrency being displayed.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/stock-crypto-prices-frontend.git
    cd stock-crypto-prices-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file in the root of the project and add your MongoDB URI and Database name:
    ```
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/mydatabase?retryWrites=true&w=majority
    MONGODB_DB=yourDatabaseName
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

