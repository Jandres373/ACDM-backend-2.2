const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = User;
