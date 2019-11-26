
var request = require("request");

module.exports = {


  friendlyName: 'Youtube api id',


  description: 'Get youtube functionalities using youtube api',


  inputs: {
//    part: 'snippet',
//    id: '9g8E36Ds9dk',
  },

  exits: {
  },

  fn: async function (inputs) {
    var url = "https://www.googleapis.com/youtube/v3/search/?key=%key&part=%part&q=https://www.youtube.com/watch?v=%id"
    url = url.replace('%key', this.sails.config.custom.youtubeApiKey); // Token from custom sails.
    if (inputs) {
      url = url.replace('%id', inputs); // Token from custom sails.    
      url = url.replace('%part', inputs);
    } else {
      url = url.replace('%part', 'snippet');
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
