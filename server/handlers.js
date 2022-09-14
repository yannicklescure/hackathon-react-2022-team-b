"use strict";

const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, DB_NAME } = process.env;
const mcache = require('memory-cache');

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const createTicket = async (req, res) => {
  console.log(req.params);
  console.log(req.query);

  let data = {};

  res.status(200).json({ status: 200, data, message: "success" });
};

const getTickets = async (req, res) => {
  console.log(req.params);
  console.log(req.query);

  let data = {};

  res.status(200).json({ status: 200, data, message: "success" });
};

module.exports = {
  createTicket,
  getTickets,
};
