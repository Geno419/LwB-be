## Learning Without Borders (LwB) - Project README

Welcome to the Learning Without Borders (LwB) project! This repository contains the backend code for a comprehensive online educational application designed to facilitate communication between teachers and students, provide resources, and enable virtual classrooms. The project includes features such as authentication, teacher and student interfaces, video streaming, real-time messaging, and more.

### Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Setting up Environment Variables](#setting-up-environment-variables)
  - [MongoDB Connection String](#1-mongodb-connection-string)
  - [JWT Secret Key](#2-jwt-secret-key)
  - [Example](#example)
- [Contributing](#contributing)
- [License](#license)
- [Frontend Repository](#frontend-repository)

### Introduction

The Learning Without Borders (LwB) project is an online educational platform aimed at bridging the gap between teachers and students through innovative technology. It provides a seamless interface for teachers to send information, conduct virtual classrooms, and interact with students in real-time. The backend of the application is built using Node.js, Express.js, MongoDB, and integrates with the Agora SDK for video streaming using WebRTC technology.

### Features

1. **Authentication**:

   - User authentication using JSON Web Tokens (JWT).
   - Separate routes for teachers and students.

2. **Video Streaming**:

   - Integration with Agora RTC SDK for real-time video streaming.
   - Creation and management of virtual classrooms.

3. **Real-time Messaging**:

   - Integration with Agora RTM SDK for real-time messaging between users.
   - Chat functionality for communication within virtual classrooms.

4. **Resource Management**:
   - Management of subjects, years, quizzes, events, and notes.

### Prerequisites

To run the LwB project backend, ensure you have the following prerequisites installed:

- Node.js and npm

### Installation

To install dependencies, run the following command:

```bash
npm install
```

### Usage

To start the backend server, run:

```bash
npm start
```

The server will start running at the specified port.

### Setting up Environment Variables

To ensure secure handling of sensitive information such as database connection strings and JWT secrets, you need to set up environment variables. This project requires environment variables to connect to MongoDB and for JWT encryption.

#### 1. MongoDB Connection String

Create a `.env` file in the root directory of your project if it doesn't exist already. Add the following line to the `.env` file:

```plaintext
DB_URI=your_mongodb_connection_string_here
```

Replace `your_mongodb_connection_string_here` with the actual connection string for your MongoDB database. This string typically includes the protocol (`mongodb://`), the database host, port (if not default), and authentication details if required.

#### 2. JWT Secret Key

For JWT encryption and decryption, you need to define a secret key. This key is used to sign and verify JWT tokens.

Create a `token.env` file in the root directory of your project. Add the following line to the `token.env` file:

```plaintext
JWT=your_jwt_secret_key_here
```

Replace `your_jwt_secret_key_here` with a strong secret key of your choice. Ensure that this key is kept secure and not shared publicly.

#### Example:

Here's how your `.env` and `token.env` files might look:

**.env:**

```plaintext
DB_URI=mongodb://username:password@localhost:27017/your_database
```

**token.env:**

```plaintext
JWT=mySuperSecretKey123!
```

Ensure that these files are included in your `.gitignore` file to prevent them from being pushed to your version control system and exposed publicly.

With these environment variables set up, your application will be able to securely connect to MongoDB and encrypt JWT tokens for user authentication.

### Contributing

Contributions to enhance the functionality, fix bugs, or improve the user experience are welcome. Feel free to fork the repository, make changes, and submit a pull request.

### License

This project is open-source and available under the MIT License. See the [LICENSE](LICENSE) file for details.

### Frontend Repository

The frontend code for the LwB project can be found at [LwB Frontend Repository](https://github.com/LWBcoders/LwB-fe).

---

Feel free to customize and expand this README according to your project's specific requirements and documentation standards.
