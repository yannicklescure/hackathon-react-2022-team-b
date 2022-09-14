"use strict";

const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI, DB_NAME } = process.env;

const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const createTicket = async (req, res) => {
  const client = new MongoClient(MONGO_URI, option);
  const { _id } = req.body;
  const data = req.body;
  console.log(data);

  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const ticket = await db.collection("tickets").findOne({ _id });

    console.log(ticket);
    if (ticket) {
      const result = await db.collection("tickets").updateOne(
        { _id },
        {
          $set: data,
        }
      );

      console.log(result);
      return res.status(200).json({
        status: 200,
        message: `Ticket updated`,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: `Ticket update failed`,
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    client.close();
  }
};

const getTickets = async (req, res) => {
  const client = new MongoClient(MONGO_URI, option);
  try {
    await client.connect();
    const db = client.db(DB_NAME);
    const data = await db.collection("tickets").find().toArray();
    console.log(data);
    data
      ? res.status(200).json({ status: 200, data, message: "success" })
      : res.status(409).json({ status: 409, message: "ERROR" });
  } catch (err) {
    console.log("Error getting list of tickets", err);
    res.status(500).json({ status: 500, message: err });
  } finally {
    client.close();
  }
};

module.exports = {
  createTicket,
  getTickets,
};
