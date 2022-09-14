"use strict";

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const compression = require("compression");

const {
  createTicket,
  getTickets,
} = require("./handlers");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(compression()); // compress all responses
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(morgan("tiny"));
// Content Security Policy (CSP)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
// https://helmetjs.github.io/
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(cors());
app.use(express.static("./server/assets"));
// Set limit to 25mb to send images
// https://reactgo.com/request-entity-too-large-node/
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: false, limit: "25mb" }));
if (process.env.NODE_ENV === "developement") {
  app.use("/", express.static(__dirname + "/"));
}

app.post("/api/tickets", createTicket);
app.get("/api/tickets", getTickets);

// The section below is to serve React on heroku server
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, "../client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
