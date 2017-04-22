'use strict';

// Initializes the `movies` service on path `/movies`
const createService = require('feathers-sequelize');
const createModel = require('../../models/movies.model');
const hooks = require('./movies.hooks');
const filters = require('./movies.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'api_movies',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/api_movies', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api_movies');

  service.hooks({
    before: {
      find(hook) {
        hook.params.sequelize = {
          include: [ 
            require('../../models/transes.model')(app),
            require('../../models/series.model')(app)
          ]
        }
      }
    }
  });

  if (service.filter) {
    service.filter(filters);
  }
};
