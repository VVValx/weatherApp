const express = require("express");
const getTemp = require("../utils/weather");
const router = express.Router();

router.get("/", (req, res) => {
  if (!req.query.location)
    return res.send({ error: "You must provide a location" });

  getTemp(req.query.location, (data) => {
    //currentTemperature: data.current.temperature.toString(),

    res.send(data);
  });
});

module.exports = router;
