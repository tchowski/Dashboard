module.exports = {


  friendlyName: 'Json info',


  description: 'Get info about web application',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    const moment = require('moment');

    let _tojson = {
      client: {
        host: this.req.ip,
      },
      server: {
        current_time: moment().format("X"),
        services: [{
          name: "Weather",
          widgets: [
            {
              name: "city_temperature",
              description: "Display temperature for a city",
              params: [{
                name: "city",
                type: "string"
              }]
            },
            {
              name: "city_hummidity",
              description: "Display humidity for a city",
              params: [{
                name: "city",
                type: "string"
              }]
            },
            {
              name: "city_pressure",
              description: "Display pressure for a city",
              params: [{
                name: "city",
                type: "string"
              }]
            },
          ]
        },
        {
          name: "Exchange",
          widgets: [{
            name: "exchange_rate",
            description: "Display exchange currency",
            params: [{
              name: "city",
              type: "string"
            }]
          }]
        },
        {
          name: "Youtube",
          widgets: [{
            name: "youtube_comments",
            description: "Display comments on specific video",
            params: [{
              name: "number",
              type: "integer"
            },
            {
              name: "url",
              type: "url"
            }]
          },
          {
            name: "youtube_number_view",
            description: "Display view on specific video",
            params: [{
              name: "number",
              type: "integer"
            },
            {
              name: "url",
              type: "url"
            }],
          },
          {
            name: "youtube_number_subscriber",
            description: "Display subscribers on specific video",
            params: [{
              name: "number",
              type: "integer"
            },
            {
              name: "url",
              type: "url"
            }],
          }
        ]
        },
        ]
      }
    }
    this.res.json(_tojson);
    return;

  }


};
