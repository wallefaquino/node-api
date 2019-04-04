'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING
  }, {
    timestamps: false,
    freezeTableName: true
  });
  Client.associate = function(models) {
    // associations can be defined here
  };
  return Client;
};