const express = require("express");
require("dotenv").config();
const db = require("./src/config/db");
const app = express();
db.connect();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const Port = process.env.PORT;
app.listen(Port, console.log(`Connecting to ${Port}....`));
