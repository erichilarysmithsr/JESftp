"use strict";
let datafire = require('datafire');

let google_firebaserules = require('@datafire/google_firebaserules').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_firebaserules.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
