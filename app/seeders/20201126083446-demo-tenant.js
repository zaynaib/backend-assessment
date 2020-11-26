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

    await queryInterface.bulkInsert('Tenants', [
      {
        "id": 1,
        "firstName": "meta",
        "lastName": "worldpeace",
        "email": "metaworldpeace@gmail.com"
      },
      {
        "id": 2,
        "firstName": "Jimmy",
        "lastName": "butler",
        "email": "jimmybutler@gmail.com"
      },
      {
        "id": 3,
        "firstName": "Nneka",
        "lastName": "Ogwumike",
        "email": "nneka@gmail.com"
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

    await queryInterface.bulkDelete('Tenants', null, {});

  }
};
