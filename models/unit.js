'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Unit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Unit.belongsTo(models.Tenant);

    }
  };
  Unit.init({
    id: DataTypes.UUID,
    bedrooms: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    rent: DataTypes.INTEGER,
    tenantId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Unit',
  });
  return Unit;
};