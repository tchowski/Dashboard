var request = require("request");

module.exports = {


  friendlyName: 'Weather api',


  description: 'Get weather real-time by openwheather api: exemple: http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=\'mysuperapi ',


  inputs: {
    cityLocation: {
      // required: true, // True en production
      type: 'string',
      description: 'City to check weather',
    },
  },

  exits: {
    success: {
      description: "Call weather-api",
    }
  },

  fn: async function (inputs) {
    //524901 id ville ramdom
    var url = 'http://api.openweathermap.org/data/2.5/forecast?id=%city&APPID=%s';
    url = url.replace('%s', this.sails.config.custom.APPID); // Token from custom sails.
    if (inputs.cityLocation)
      url = url.replace('%city', inputs.cityLocation); // Token from custom sails.
    else
      url = url.replace('%city', "524901"); // Token from custom sails.
    var options = { method: 'GET', url: url, json: true };
    call = async () => {
      return new Promise((resolve, reject) => {
        request(options, (err, resp, body) => {
          if (err) {
            reject(err);
          }
          resolve(body);
        });
      });
    }
    var body = await call();
    this.res.send(body);
  }
};
