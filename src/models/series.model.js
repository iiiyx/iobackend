'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const series = sequelizeClient.define('moonall_sers', {
    sid: {
      type: Sequelize.STRING(32),
      allowNull: false
    },
    s: {
      type: Sequelize.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    e: {
      type: Sequelize.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    eid: {
      type: Sequelize.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: Sequelize.DATE(6),
      allowNull: true
    },
    cc: {
      type: Sequelize.STRING,
      allowNull: true
    }
  }, {
    classMethods: {
      associate (models) { // eslint-disable-line no-unused-vars
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
      }
    }
  });

  return series;
};
