---------------- Deployment instructions: ------------------------------------------------------------------------------------------------------------

step 1: Create a google project first and then install the Google cloud SDK on your machine then configure it with command line interface
eg: gcloud config set project <your-project-id>

step 2: Enable Required APIs:

gcloud services enable pubsub.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com

step 3: Docker Configuration:

docker build -t gcr.io/<your-project-id>/button-click-app:latest .
docker run -p 8080:8080 --env-file .env gcr.io/<your-project-id>/button-click-app:latest

after testing locally, you can push the image on the goolecloud

docker push gcr.io/<your-project-id>/button-click-app:latest

step 4: Google Pub/Sub Configuration:

1. Create a Pub/Sub Topic
2. Set Permissions for Pub/Sub

step 5: Pulumi Configuration

1. Install Pulumi
2. Create a Pulumi project
3. Deploy Pulumi Stack

step 6: Deploy on Cloud Run the docker container

1. Deploy the Docker image to Cloud Run
2. Verify Deployment

--------------------------- Steps for setting up locally: ----------------------------------------------------------------------------------------

step 1: Clone the code repository
step 2: RUN 'npm install'
step 3: RUN 'npm run start:dev'

-------------------------- Required environment variables: -------------------------------------------------------------------------------------------
MONGO_URI =
PORT = 8080
PUBSUB_TOPIC =

------------------------------------------- Explanation of the tech stack and how it works: --------------------------------------------------------------

Tech stack used:

Express: Backend framework for handling HTTP requests and building RESTful APIs.
MongoDB: NoSQL database for storing click logs.
Google Cloud Pub/Sub: Asynchronous messaging service for publishing rate-limit notifications.
Google Cloud Run: Serverless container hosting for deploying and scaling the app
Pulumi (TypeScript): Infrastructure-as-code (IaC) tool for provisioning cloud resources.
Docker: Containerization platform to package the application and its dependencies.
Frontend/UI: Provides a simple interface with buttons for user interaction.

Flow:

User Interaction:
Users interact with the app by clicking the blue or red button.
The client sends a POST request to the /click endpoint with the red/blue button color.

Rate Limiting:
Redis checks the user’s click count for the specified button in the last minute.
If the limit (10 clicks/min) is exceeded, the user receives a "rate limit exceeded" message, and the event is published to Pub/Sub.

Data Logging:
Each button click is logged in MongoDB, storing details like the button color, user IP, and timestamp.

Pub/Sub Notifications:
When the click limit is exceeded, a notification containing the button color, timestamp, and user IP is published to a Google Cloud Pub/Sub topic.

Deployment and Scalability:
The application is containerized with Docker and deployed to Google Cloud Run, ensuring it scales automatically based on traffic.

Summary:
This stack integrates Express.js for application logic, MongoDB for persistent storage, express rate limiting, and Google Cloud Pub/Sub for event-driven notifications. With Pulumi for infrastructure management and Docker for containerization, the app is designed to be scalable, efficient, and easily maintainable, making it a robust solution for handling button click events with rate limits.
