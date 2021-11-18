'use strict';
module.exports = (sequelize, DataTypes) => {
  const PotionType = sequelize.define('PotionType', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  PotionType.associate = function (models) {
    PotionType.hasMany(models.Potion, { foreignKey: 'type_id' });
  };
  return PotionType;
};
