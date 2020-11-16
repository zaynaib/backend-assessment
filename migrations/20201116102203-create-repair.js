'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Repairs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.UUID
      },
      tenantId: {
        type: Sequelize.UUID
      },
      note: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.ENUM("flooring","plumbing","landscaping","other")
      },
      complete: {
        type: Sequelize.BOOLEAN
      }
    }),{timestamps:false};
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Repairs');
  }
};