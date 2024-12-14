const express = require("express");
const clickController = require("../controllers/clickController");
const rateLimiter = require("../middlewares/rateLimiter");

const router = express.Router();

router.post("/", rateLimiter, clickController.logClick);

module.exports = router;
