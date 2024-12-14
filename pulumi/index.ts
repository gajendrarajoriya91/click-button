import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

// Create a Pub/Sub Topic
const topic = new gcp.pubsub.Topic("buttonClickTopic");

// Deploy Cloud Run Service
const service = new gcp.cloudrun.Service("button-click-service", {
  location: "us-central1",
  template: {
    spec: {
      containers: [
        {
          image: "gcr.io/click-app-444713/button-click-app:latest",
          envs: [{ name: "PUBSUB_TOPIC", value: topic.name }],
        },
      ],
    },
  },
});

// Use the `statuses` field to get the URL
export const serviceUrl = service.statuses.apply(
  (statuses) => statuses?.[0]?.url
);
