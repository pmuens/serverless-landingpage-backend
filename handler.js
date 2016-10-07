'use strict';

const create = require('./create.js');

module.exports.create = (event, context, callback) => {
  create(event, (error, response) => {
    context.done(error, response);
  });
};
