'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cat.belongsTo(models.User, {foreignKey: "UserId", targetKey: "id"})
    }
  };
  Cat.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    type: DataTypes.STRING,
    age: DataTypes.STRING,
    gender: DataTypes.STRING,
    primaryBreeds: DataTypes.STRING,
    secondaryBreeds: DataTypes.STRING,
    mixedBreeds: DataTypes.BOOLEAN,
    size: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cat',
  });
  return Cat;
};