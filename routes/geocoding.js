const express = require("express");
const geoCode = require("../utils/geocoding");
const router = express.Router();

const location = "Helsinki";
router.get("/", (req, res) => {
  geoCode(location, (data) => {
    res.send(data);
  });
});

router.get("/coordinates", (req, res) => {
  geoCode(location, (data) => {
    const longitude = data.features[0].center[0].toString();
    const latitude = data.features[0].center[1].toString();
    const coordinates = {
      longitude,
      latitude,
    };
    res.send(coordinates);
  });
});

module.exports = router;
