"use strict";
let datafire = require('datafire');

let google_classroom = require('@datafire/google_classroom').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => google_classroom.oauthCallback({
      code: "",
    }, context)));
    return result;
  },
});
