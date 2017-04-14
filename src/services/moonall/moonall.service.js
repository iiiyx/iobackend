'use strict';

// Initializes the `moonall` service on path `/moonall`
const createService = require('feathers-sequelize');
const createModel = require('../../models/moonall.model');
const hooks = require('./moonall.hooks');
const filters = require('./moonall.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'moonall',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/moonall', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('moonall');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
