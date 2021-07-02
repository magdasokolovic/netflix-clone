const { Series } = require("../models");
const getAllSeries = (req, res) => {
  Series.find({}, (err, data) => {
    if (err) {
      res.status(500).json(err);
    }
    res.status(200).json(data);
  });
};

module.exports = { getAllSeries };
