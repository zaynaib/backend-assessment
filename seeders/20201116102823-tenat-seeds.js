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
      
      {id: 1,
        firstName: "meta",
        lastName:"worldpeace",
        email: "metaworldpeace@gmail.com"
        },
        
        {
        id: 2,
        firstName: "Jimmy",
        lastName:"butler",
        email: "jimmybutler@gmail.com"
        },

        {id: 3,
        firstName: "Nneka",
        lastName:"Ogwumike",
        email: "nneka@gmail.com"}
    
    ], {});


      await queryInterface.bulkInsert('Units', [
        {id: 1,
          bedrooms: 2,
          floor:1,
          rent: 300,
          tenantId: 1},
          
          {id: 2,
          bedrooms: 3,
          floor:2,
          rent: 600,
          tenantId: 2}
    
    ], {});

      await queryInterface.bulkInsert('Repairs', [
        {id:1,
          tenantId:1,
          note: "toliet wont flush",
          type:"plumbing",
          complete:false}
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
    await queryInterface.bulkDelete('Units', null, {});
    await queryInterface.bulkDelete('Repairs', null, {});
  }
};
