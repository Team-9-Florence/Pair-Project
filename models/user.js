'use strict';
const {goHash} = require('../helper/bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Cat, {foreignKey: "UserId", sourceKey: "id"})
    }
  };
  User.init({
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        isEmail : {
          msg : `must filled it with email`
        },
        notNull : {
          msg : `email must not null`
        },
        notEmpty : {
          msg : `email must not empty`
        }
      } 
    },
    password: {
      type : DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : `password must not null`
        },
        notEmpty : {
          msg : `password must not empty`
        }
      }
    }
  }, {
    hooks : {
      beforeCreate : (inst,opt) => {
        inst.password = goHash(inst.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};