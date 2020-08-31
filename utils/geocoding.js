const axios = require("axios").default;

module.exports = async function geoCode(location, callback) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoidnZ2YWx4IiwiYSI6ImNrZDBmZnRyNzA0aHQzMG50bjlobHNhOXIifQ.J09TlzZ6ixJR7dWbG52tLQ`;

  try {
    const { data } = await axios.get(url);
    callback(data);
  } catch (err) {
    callback(err);
  }
};
