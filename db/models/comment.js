'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: {
      allowNull: false,
      type: DataTypes.TEXT,
    }, 
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }, 
    potion_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'user_id' })
    Comment.belongsTo(models.Potion, { foreignKey: 'potion_id' })

    
  };
  return Comment;
};