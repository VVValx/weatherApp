const mongoose = require("mongoose");

module.exports = function () {
  mongoose
    .connect("mongodb://localhost/playground", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to database"))
    .catch((err) => console.log(err));
};
