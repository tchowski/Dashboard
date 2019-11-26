
var request = require("request");

module.exports = {


  friendlyName: 'Youtube api views',


  description: 'Get youtube functionalities using youtube api',


  inputs: {
//    part: "statistics",
//    id: "9g8E36Ds9dk",
  },

  exits: {
  },

  fn: async function (inputs) {
    var url = 'https://www.googleapis.com/youtube/v3/videos?part=%part&id=%id&key=%key';
    url = url.replace('%key', this.sails.config.custom.youtubeApiKey); // Token from custom sails.
    if (inputs) {
      url = url.replace('%id', inputs); // Token from custom sails.    
      url = url.replace('%part', inputs);
    } else {
      url = url.replace('%part', 'statistics');
      url = url.replace('%id','9g8E36Ds9dk')
    }
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
