'use strict';

const movies = require('./movies/movies.service.js');

const series = require('./series/series.service.js');

module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(movies);
  // movies.associate();
  app.configure(series);
};
