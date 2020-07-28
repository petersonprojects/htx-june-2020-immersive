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

   await queryInterface.bulkInsert('users', [{
      firstname: 'John',
      lastname: "Doe",
      email: "john@dc. com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: "John",
      lastname: "Kearney",
      email: "john@dc.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Daniel',
      lastname: "Dolan",
      email: "daniel@dc.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Austin',
      lastname: "Denny",
      email: "austing@dc.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Carlos',
      lastname: "Lino",
      email: "carlos@dc.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Mario',
      lastname: "Lino",
      email: "mario@dc.com",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Peggy',
      lastname: "Lino",
      email: "peggy@dc.com",
      createdAt: new Date(),
      updatedAt: new Date()
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
  }
};
