'use strict';

const movies = require('./movies/movies.service.js');

const moonall = require('./moonall/moonall.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(movies);
  app.configure(moonall);
};
