'use strict';
module.exports = (sequelize, DataTypes) => {
  const Potion = sequelize.define('Potion', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type_id: DataTypes.INTEGER
  }, {});
  Potion.associate = function(models) {
    Potion.hasMany(models.Potion, {foreignKey: 'potionId'});
  };
  return Potion;
};
