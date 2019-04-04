'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
  	id: {
  		type: DataTypes.INTEGER,
  		primaryKey: true,
  		autoIncrement: true
  	},
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    value: DataTypes.NUMBER
  }, {
  	timestamps: false,
    freezeTableName: true
  });
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};