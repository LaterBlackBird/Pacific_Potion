'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('People', [
    { comment: 'When I found out this potion only works on medium and small creatures I felt quite excluded. In the future I\'d like to see potions designed for larger creatures too.', user_id: '1', potion_id: '1', createdAt: new Date(), updatedAt: new Date()},
    { comment: '^', user_id: '2', potion_id: '1', createdAt: new Date(), updatedAt: new Date()}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
