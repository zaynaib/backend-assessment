'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Units', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      bedrooms: {
        type: Sequelize.INTEGER
      },
      floor: {
        type: Sequelize.INTEGER
      },
      rent: {
        type: Sequelize.INTEGER
      },
      tenantId: {
        type: Sequelize.UUID
      }

    }, {timestamps:false}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Units');
  }
};