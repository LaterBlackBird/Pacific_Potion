'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PotionTypes', [
      { name: 'Healing', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Buff', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Utility', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cure', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Combat', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Consumable', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Topical', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Poison', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Magical Effect', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PotionTypes', null, {});
  }
};
