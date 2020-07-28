'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('users', [
    {
      firstname: 'John',
      lastname: 'Doe',
      email:'john@dc.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'John',
      lastname: 'Kearny',
      email:'johnk@dc.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Daniel',
      lastname: 'Dolan',
      email:'daniel@dc.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Austin',
      lastname: 'Denny',
      email:'austin@dc.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstname: 'Carlos',
      lastname: 'Lino',
      email:'carlos@dc.com',
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
