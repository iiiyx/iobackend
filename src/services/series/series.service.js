'use strict';

// Initializes the `series` service on path `/series`
const createService = require('feathers-sequelize');
const createModel = require('../../models/series.model');
const hooks = require('./series.hooks');
const filters = require('./series.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'series',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/series', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('series');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
