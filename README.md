---------------- Deployment instructions: -------------------------------------------------

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

--------------------------- Steps for setting up locally: ----------------------------------
