'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

      return queryInterface.bulkInsert('Users', [
        { username: 'Demo User', role: 'demo', email: 'demo_ppotions@gmail.com', password: 'demo',  createdAt: new Date(), updatedAt: new Date()},
        { username: 'Administrator', role: 'Admin', email: 'admin_ppotions@gmail.com', password: 'admin',  createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('Users', null, {});
  }

};
