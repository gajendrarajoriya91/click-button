const { PubSub } = require("@google-cloud/pubsub");
const { PUBSUB_TOPIC } = require("../../config/config");

const pubsub = new PubSub();

exports.publishRateLimitEvent = async (event) => {
  try {
    const dataBuffer = Buffer.from(JSON.stringify(event));
    await pubsub.topic(PUBSUB_TOPIC).publish(dataBuffer);
  } catch (error) {
    console.error("Error publishing to Pub/Sub:", error);
    throw error;
  }
};
