const path = require("path");
const express = require("express");
const hbs = require("hbs");
const index = require("../routes/home");
const temp = require("../routes/temp");
const weather = require("../routes/weather");
const geocoding = require("../routes/geocoding");
const notFound = require("../routes/404");

module.exports = function (app) {
  const publicDir = path.join(__dirname, "../public");
  const partialsDir = path.join(__dirname, "../views/partials");
  const views = path.join(__dirname, "../views/main");

  //setting view engine
  app.set("view engine", "hbs");
  app.set("views", views);
  hbs.registerPartials(partialsDir); //setup partials

  //setup static directory
  app.use(express.static(publicDir));
  app.use(express.json());

  //setting routes
  app.use("/", index);
  app.use("/forecast", temp);
  app.use("/geocoding", geocoding);
  app.use("/weather", weather);
  app.use("*", notFound);
};
