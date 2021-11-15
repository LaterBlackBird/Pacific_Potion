'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      type: DataTypes.STRING(20),
      unique: true
    },
    role: {
      allowNull: false,
      type: DataTypes.STRING(20)
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(255),
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    }
  }, {});
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
