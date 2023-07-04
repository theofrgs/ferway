# Project README

This is a Next.js project created for the company Ferway. The project is a pixel of Trello, aiming to provide a similar experience and functionality.

## Prerequisites

Before running the project, make sure you have the following dependencies installed on your system:

- Node.js (v12 or higher)
- NPM (Node Package Manager)

## Getting Started

To set up and run the project, follow these steps:

1. Clone the repository to your local machine:
    ```shell
    git clone <repository_url>
    ```

2. Navigate to the project directory:
    ```shell
    cd <project_directory>
    ```

3. Install the required dependencies:
    ```shell
    npm install
    ```

4. Build the project:
    ```shell
    npm run build
    ```

5. Start the project:
    ```shell
    npm run start
    ```

Open your web browser and visit http://localhost:3000 to access the application.

# Deployment
This project can be easily deployed using Firebase Hosting. To deploy the project, follow these steps:

1. Make sure you have the Firebase command-line tools installed. If not, install them by running:
    ```shell
    npm install -g firebase-tools
    ```

2. Build the project:
    ```shell
    npm run build
    ```

3. Initialize your Firebase project by running:
    ```shell
    firebase init
    ```

This will guide you through the initialization process. Select "Hosting" as the Firebase feature to set up.

4. Deploy the project to Firebase Hosting:
    ```shell
    firebase deploy
    ```

This will upload your project to Firebase Hosting and provide you with a unique URL where your application is deployed.

