'use strict';
module.exports = (sequelize, DataTypes) => {
  const Potion = sequelize.define('Potion', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    type_id: DataTypes.INTEGER
  }, {});
  Potion.associate = function (models) {
    Potion.belongsTo(models.PotionType, { foreignKey: 'type_id' });
    Potion.hasMany(models.Comment, { foreignKey: 'potion_id' });
  };
  return Potion;
};
