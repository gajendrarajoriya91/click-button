const express = require("express");
const bodyParser = require("body-parser");
const clickRoutes = require("./routes/clickRoutes");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.use("/click", clickRoutes);

module.exports = app;
