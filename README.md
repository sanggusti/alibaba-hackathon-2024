# Alibaba Cloud GenAI Hackathon 2024 - Waste Management Project

Welcome to the repository for the Alibaba Cloud GenAI Hackathon 2024 Waste Management project! This project aims to address the challenges of waste management using innovative AI solutions.

## Project Overview

In this hackathon, we will be developing AI models and algorithms to optimize waste management processes. Our goal is to create intelligent systems that can accurately classify different types of waste, optimize waste collection routes, and minimize environmental impact.

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- Installation
- Usage
- Contributing
- License
- Contact

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/alibaba-hackathon-2024.git
    ```

2. Navigate to the project directory:

    ```sh
    cd alibaba-hackathon-2024
    ```

3. Install the required dependencies:

    ```sh
    npm install
    ```

## Installation

### Prerequisites

Ensure you have the following prerequisites installed:

- Node.js (v14 or later)
- npm (v6 or later)
- Docker
- Docker Compose

### Backend (Django)

1. Navigate to the `backend` directory:

    ```sh
    cd backend
    ```

2. Build and start the Docker containers:

    ```sh
    docker-compose up --build
    ```

3. Apply the migrations:

    ```sh
    docker-compose exec web python manage.py migrate
    ```

4. Create a superuser:

    ```sh
    docker-compose exec web python manage.py createsuperuser
    ```

### Frontend

1. Navigate to the `frontend` directory:

    ```sh
    cd frontend
    ```

2. Install the required dependencies:

    ```sh
    npm install
    ```

## Usage

To run the project locally, use the following commands:

### Backend

Start the Django development server:

```sh
docker-compose up -d build
```

The backend server will be available at `http://localhost:8000`.

### Frontend

Start the React development server:

```sh
npm start
```

The frontend server will be available at `http://localhost:4201`.

## License

This project is licensed under the MIT License. See the [`LICENSE`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fsanggusti%2FWorkbench%2FHackathon%2Falibaba-hackathon-2024%2FLICENSE%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/sanggusti/Workbench/Hackathon/alibaba-hackathon-2024/LICENSE") file for details.

## Contact

For any questions or inquiries, please contact us at [gustiowinata0@gmail.com](mailto:gustiowinata0@gmail.com).

Happy hacking!
