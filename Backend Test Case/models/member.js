'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Member.init({
    uuid: DataTypes.STRING,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    created_by: DataTypes.BIGINT,
    updated_by: DataTypes.BIGINT,
    deleted_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Member',
    underscored: true,
    paranoid: true,
    tableName: 'members',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    deletedAt: 'deleted_at',
  });
  return Member;
};