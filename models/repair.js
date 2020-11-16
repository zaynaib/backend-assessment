'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Repair extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Repair.init({
    id: DataTypes.UUID,
    tenantId: DataTypes.UUID,
    note: DataTypes.STRING,
    type: DataTypes.ENUM,
    complete: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Repair',
  });
  return Repair;
};