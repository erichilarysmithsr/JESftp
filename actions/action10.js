"use strict";
let datafire = require('datafire');

let google_storage = require('@datafire/google_storage').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_storage.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
