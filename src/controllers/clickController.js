const Click = require("../models/Click");
const pubsubService = require("../services/pubsubService");

exports.logClick = async (req, res) => {
  const { button } = req.body;
  const userIp = req.ip;

  try {
    // Log click to the database
    const click = new Click({ button, userIp });
    await click.save();

    res.status(200).send("Click registered.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
};

exports.rateLimitHandler = async (req, res) => {
  const { button } = req.query;
  const userIp = req.ip;

  try {
    await pubsubService.publishRateLimitEvent({ button, userIp });
    res.status(429).send("Rate limit exceeded. Please try again later.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
};
