const express = require("express");
require("dotenv").config();
const db = require("./src/config/db");
const app = express();
const Port = process.env.PORT;
const sideController = require("./src/controllers/controller");

db.connect();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api", sideController.getAllSeries);
app.listen(Port, console.log(`Connecting to ${Port}....`));
