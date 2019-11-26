var request = require("request");

module.exports = {


  friendlyName: 'Exchange api',


  description: 'Exchange API',

  data_chaton: {
    apiKey: 'Test',
  },

  inputs: {

  },

  exits: {
    success: {
      statusCode: 200,
      description: 'Requesting exchange-api with 3 inputs.',
    }
  },

  fn: async function (inputs) {
    let date = new Date().toISOString().slice(0, 10);
    var date_seven = new Date();
    date_seven.setDate(date_seven.getDate() - 7);
    date_seven = date_seven.toISOString().slice(0, 10);

    sails.log.warn("Date: =>", date);
    sails.log.warn("Date Seven: =>", date_seven);

    let url = "https://free.currconv.com/api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&date=" + date_seven + "&endDate=" + date + "&apiKey=" + this.sails.config.custom.exchangeApiKey;
    var options = { method: 'GET', url: url, json: true };

    return new Promise((resolve, reject) => {
      request(options, (err, resp, body) => {
        if (err) {
          reject(err);
        }
        resolve(body);
      });
    })
  }
}

