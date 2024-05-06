# Social Media API

Link to the [Walkthrough Video](https://drive.google.com/file/d/1wZF5GkJs0YinsTUFZy6Az8Ad-AIf9-hy/view?usp=drive_link)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

The Social Thoughts API is an Express-based web application that serves as a platform for users to share their thoughts, react to others' thoughts, and manage friendships. The primary motivation for this project was to create a robust backend system that enables social interactions similar to a simplified social media platform. This API addresses the need for scalable and efficient data handling using MongoDB with Mongoose ODM, supporting features such as user creation, thought sharing, and real-time reactions. Building this project allowed me to deepen my understanding of RESTful API design and MongoDB schema modeling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Screenshot](#screenshot)
- [Features](#features)
- [Credits](#credits)
- [License](#license)
- [Contribution](#contribution)

## Installation

To install and run the Social Media API locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies with `npm install`.
3. Create a `.env` file and configure your database settings:
4. Run `npm run seed` to seed the database with initial data.
5. Start the application using `npm run dev`.

## Usage

The API endpoints can be accessed locally at `http://localhost:3001/` once the server is running. Below are some examples of how to use the API:

* Get all users: `GET /api/users`
* Create a thought: `POST /api/thoughts` with JSON payload
* Add a reaction: `POST /api/thoughts/:thoughtId/reactions`

You can use tools like Postman or Insomia to interact with the API.

## Screenshot
![Screenshot](/utils/Screenshot.png)

## Credits

This project was developed by [Luis Asprilla](https://www.linkedin.com/in/andersonasprilla/) Special thanks to Node.js, and MongoDb documentation.

## License
This project is licensed under the MIT License. For more information, please visit [here](https://opensource.org/licenses/MIT).

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contribution

Contributions are welcome. Please fork the repository and submit a pull request with your changes.

