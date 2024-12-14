const rateLimit = require("express-rate-limit");
const clickController = require("../controllers/clickController");

const rateLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  keyGenerator: (req) => `${req.ip}-${req.body.button}`,
  handler: clickController.rateLimitHandler,
});

module.exports = rateLimiter;
