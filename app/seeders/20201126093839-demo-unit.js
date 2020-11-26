'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

   await queryInterface.bulkInsert('Units', [
    {
      "id": 1,
      "bedrooms": 2,
      "floor":1,
      "rent": 300,
      "tenantId": 1
  },
  {
      "id": 2,
      "bedrooms": 3,
      "floor":2,
      "rent": 600,
      "tenantId": 2
  }

], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Units', null, {});

  }
};
