'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  let transes = sequelizeClient.define('moon_trans', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate (models) { // eslint-disable-line no-unused-vars
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
        // transes.has(models.transes, {foreignKey: 'trid'})
      }
    }
  });
  return transes
}