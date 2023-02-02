const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=1feb220a125615cf8c62891292878d2a&query='  + latitude ' + "," + longitude + '&units=f';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degress out. There is a " +
          body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
