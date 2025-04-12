Here's the modified `README.md` file, incorporating Vite with React and TypeScript for the frontend:

```markdown
# Link Analytics Dashboard

This project provides a backend API to create, manage, and track shortened URLs with analytics. It tracks user interactions such as clicks and device/browser information using MongoDB and Mongoose. This API allows users to create short links, view their links, and track analytics related to those links.

## Features

- **Create Short Links**: Shorten long URLs with an optional custom alias.
- **View User's Short Links**: Retrieve all short links created by the logged-in user.
- **Track Link Clicks**: Track when a short link is clicked and store analytics data such as IP address, device type, browser, and operating system.
- **JWT Authentication**: Secure the API endpoints using JWT tokens for user authentication.

## Technologies

- **Node.js** (Backend)
- **Express.js** (Framework)
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **JWT** (Authentication)
- **UA-Parser-js** (User-Agent Parsing)
- **Nanoid** (Short ID generation)
- **Vite** (Frontend build tool)
- **React** (Frontend framework)
- **TypeScript** (Frontend typing)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or above)
- [MongoDB](https://www.mongodb.com/) (Running instance or Atlas cluster)
- A `.env` file with your environment variables.

### Backend Setup

1. Clone the backend repository:
   ```bash
   git clone https://github.com/ASHISH26940/link-backend.git
   cd link-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the project with the following variables:
   ```
   JWT_SECRET=your_secret_key
   MONGO_URI=mongodb://localhost:27017/your_database_name
   ```

4. Run the server:
   ```bash
   npm start
   ```

   The backend will now be running on `http://localhost:3000`.

### Frontend Setup (Vite + React + TypeScript)

1. Clone the frontend repository:
   ```bash
   git clone https://github.com/ASHISH26940/link-frontend.git
   cd link-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

   The frontend will now be running on `http://localhost:5173` (or another port based on your setup).

## API Endpoints

### `POST /signup`

- **Description**: Register a new user.
- **Body**:
  ```json
  {
    "username": "your-username",
    "password": "your-password"
  }
  ```
- **Response**:
  ```json
  {
    "message": "User created successfully"
  }
  ```

### `POST /login`

- **Description**: Log in a user and receive a JWT token.
- **Body**:
  ```json
  {
    "username": "your-username",
    "password": "your-password"
  }
  ```
- **Response**:
  ```json
  {
    "token": "your-jwt-token"
  }
  ```

### `POST /create-link`

- **Description**: Create a short URL.
- **Headers**:
  - `Authorization: Bearer <JWT_TOKEN>`
- **Body**:
  ```json
  {
    "originalUrl": "https://www.example.com",
    "customAlias": "myalias",
    "expiresAt": "2025-01-01T00:00:00Z"
  }
  ```


### `GET /get-user`

- **Description**: Fetch all short links created by the logged-in user.
- **Headers**:
  - `Authorization: Bearer <JWT_TOKEN>`



## Analytics Tracking

When a user clicks on a short link, the API tracks the following data:

- **IP Address**: The user's IP address.
- **Device Type**: The type of device used (desktop, mobile, etc.).
- **Browser**: The browser used by the user (Chrome, Firefox, etc.).
- **OS**: The operating system used by the user (Windows, macOS, Linux, etc.).

This data is saved in the `ClickAnalytics` collection in the MongoDB database.

## Error Handling

The API handles errors gracefully. Common responses include:

- `401 Unauthorized`: Missing or invalid JWT token.
- `404 Not Found`: Resource not found (e.g., short link not found).
- `500 Internal Server Error`: Unexpected server error.

## Testing

You can test the API using tools like [Postman](https://www.postman.com/) or by writing your own tests using [Jest](https://jestjs.io/).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Key Updates:
1. **Vite + React + TypeScript**:
   - Added instructions for setting up the frontend with **Vite**, **React**, and **TypeScript**.
  
2. **Frontend Setup**:
   - Provided commands for installing dependencies and running the development server for the frontend.

This update should now reflect the usage of **Vite** for the frontend alongside **React** and **TypeScript**.