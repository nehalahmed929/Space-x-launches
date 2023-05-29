# Space X Past Launches

This project fetches past launches from the Space X GraphQL API and displays launch information, including launch video, name, date, mission name, and rocket used. It is built using React and TypeScript.

## Features

- **GraphQL Client**: Apollo Client is used as the GraphQL client to interact with the Space X API.
- **Pagination**: The project implements pagination to efficiently load and display a large number of past launches.
- **Path Aliases**: Craco is used for path aliasing, enabling a simpler import path setup without the need to eject the application.
- **Launch Videos**: Launch-related videos can be played directly on the page itself, providing a seamless user experience.
- **Related Blog Links**: Clicking on a launch card opens a related blog post, providing additional information and context.

## Further Improvement Points

The project has the following improvement points:

- **Automated Tests**: Write automated tests for both unit testing and integration testing to ensure the reliability and stability of the application.
- **Routing System**: Introduce a routing system (e.g., React Router) to enable navigation between different pages and enhance user experience.
- **Continuous Integration**: Implement a CI/CD pipeline to automate the build, testing, and deployment process, ensuring code quality and enabling seamless integration with other tools.
- **Dockerization**: Dockerize the application for easier deployment and scalability.
- **UI Improvements**: Improve the user interface by utilizing a theming library like Chakra UI or Material-UI to enhance the visual design and user experience.

## Prerequisites

Make sure you have the following installed:

- Node.js: [https://nodejs.org](https://nodejs.org)
- Yarn: [https://yarnpkg.com](https://yarnpkg.com)

## Getting Started

### 1. Clone the repository:

```bash
git clone <repository_url>
```

### 2. Install dependencies:

```bash
yarn install
```

### 3. Start the development server:

```bash
yarn start
```

Open your browser and visit http://localhost:3000 to see the application running.

## Available Scripts

In the project directory, you can run the following scripts:

- **yarn start**: Runs the app in development mode.
- **yarn build**: Builds the app for production.
- **yarn test**: Launches the test runner.
