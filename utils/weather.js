const axios = require("axios").default;

module.exports = async function getTemp(location, callback) {
  const url = `http://api.weatherstack.com/current?access_key=0ac37fc2bca524fc33aac3bbf897fdfa&query=${location}`;

  try {
    const { data } = await axios.get(url);
    callback(data);
  } catch (error) {
    callback(error);
  }
};
