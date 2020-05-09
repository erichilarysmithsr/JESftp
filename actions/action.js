"use strict";
let datafire = require('datafire');

let zoom_us = require('@datafire/zoom_us').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => zoom_us.recordingGet({
      meetingId: 0,
    }, context)));
    return result;
  },
});
