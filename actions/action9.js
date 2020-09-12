"use strict";
let datafire = require('datafire');

let google_script = require('@datafire/google_script').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_script.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
