'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const movies = sequelizeClient.define('movies', {
    type: {
      type: Sequelize.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    ru: {
      type: Sequelize.STRING(300),
      allowNull: true
    },
    en: {
      type: Sequelize.STRING(150),
      allowNull: true
    },
    time: {
      type: Sequelize.DATE(6),
      allowNull: false
    },
    kpid: {
      type: Sequelize.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    trid: {
      type: Sequelize.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    camrip: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    classMethods: {
      associate (models) { // eslint-disable-line no-unused-vars
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
      }
    }
  });

  return movies;
};