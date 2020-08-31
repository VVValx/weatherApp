const express = require("express");
const app = express();
require("./startup/routes")(app);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Listen to port ${port}...`);
});