"use strict";
let datafire = require('datafire');

let google_webmasters = require('@datafire/google_webmasters').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_webmasters.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
