'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pinjam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Book, {
        foreignKey: 'book_id',
      })

      this.belongsTo(models.Member, {
        foreignKey: 'member_id',
      })
    }
  }
  Pinjam.init({
    uuid: DataTypes.STRING,
    member_id: DataTypes.BIGINT,
    book_id: DataTypes.BIGINT,
    tgl_pinjam: DataTypes.DATE,
    tgl_kembali: DataTypes.DATE,
    created_by: DataTypes.BIGINT,
    updated_by: DataTypes.BIGINT,
    deleted_by: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Pinjam',
    underscored: true,
    paranoid: true,
    tableName: 'pinjams',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    deletedAt: 'deleted_at',
  });
  return Pinjam;
};