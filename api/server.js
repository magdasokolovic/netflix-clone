const express = require("express");
const cors = require("cors");
const db = require("./src/config/db");
const app = express();
const Port = process.env.PORT || 5000;
const controller = require("./src/controllers/controller");

db.connect();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/api/series", controller.getAllSeries);
app.listen(Port, console.log(`Connecting to ${Port}....`));
