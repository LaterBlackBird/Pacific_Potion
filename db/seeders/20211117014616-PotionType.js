'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PotionTypes', [
      {
        name: 'Healing',
        image: 'https://i.imgur.com/RYKtJ0Q.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Buff',
        image: 'https://i.imgur.com/TS6Bcbr.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Utility',
        image: 'https://i.imgur.com/UkUlczj.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Combat',
        image: 'https://i.imgur.com/Eb5yNxw.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Poison',
        image: 'https://i.imgur.com/CAawjOY.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Enchantment',
        image: 'https://i.imgur.com/UVodTbe.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Illusion',
        image: 'https://i.imgur.com/zVwEYOh.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PotionTypes', null, {});
  }
};
