'use strict';
module.exports = (sequelize, DataTypes) => {
  const PotionType = sequelize.define('PotionType', {
    name: DataTypes.STRING
  }, {});
  PotionType.associate = function(models) {
    PotionType.belongsTo(models.Potion, {foreignKey: 'potionId'});
  };
  return PotionType;
};
