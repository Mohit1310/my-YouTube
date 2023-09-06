# YouTube Clone
![Project Screenshot (1)](https://github.com/Mohit1310/my-YouTube/assets/70746260/5471b464-35fa-4d86-b7ab-9e7df59849b5)

A YouTube clone built using React, Redux, and Vite that utilizes the YouTube API to fetch videos for the homepage, complete with titles and descriptions. This project also includes a search bar that provides search suggestions (though the search functionality is currently static and non-functional). When viewing a video, users can see nested comments, and live comments are also supported without causing page freezes by automatically deleting older comments after a certain threshold is reached.

### Search with Debouncing

Our YouTube clone features an intelligent search bar with a debouncing mechanism. This means that as you type your search query, the application won't make immediate requests to the YouTube API for every keystroke, which can be resource-intensive and cause unnecessary load. Instead, it waits for a brief pause in your typing, and then it sends the search query to fetch results. This enhances user experience by reducing unnecessary API requests and providing more relevant search results.

To use the search bar effectively, simply start typing your search query, and the suggestions will update dynamically. When you're ready to search, hit the Enter key, and the clone will fetch and display the results for your query.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This YouTube clone is a web application built to replicate some of the key features of YouTube, such as browsing and viewing videos, searching for content, and interacting with comments. It is developed using modern web technologies and follows best practices for a seamless user experience.

## Features

- Homepage with YouTube videos fetched via the YouTube API.
- Video search functionality with suggestions (currently static).
- Detailed video pages with nested comments.
- Live comments that automatically delete older comments to prevent page freezing.

## Getting Started

Follow these instructions to get your project up and running locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download it here](https://nodejs.org/)
- npm (Node Package Manager): Typically included with Node.js installation.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mohit1310/my-YouTube.git

2. Navigate to the project directory:
    `cd my-YouTube`

3. Install project dependencies:
    `npm install`

4. Start the development server:
    `npm run dev`

5. Open your web browser and visit http://localhost:5173

## Usage

Explain how users can use your YouTube clone. Provide usage examples and any additional information that can help users navigate and interact with your application.

## Contributing

We welcome contributions from the community. To contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them with descriptive commit messages.
4. Push your branch to your fork: `git push origin feature-name`.
5. Open a pull request on the main repository's `main` branch.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the terms of the license.
