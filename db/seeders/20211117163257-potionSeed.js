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

    return queryInterface.bulkInsert('Potions', [

      {
        name: 'Oil of Etherealness',
        description: 'Beads of this cloudy gray oil form on the outside of its container and quickly evaporate. The oil can cover a Medium or smaller creature, along with the equipment it’s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of the etherealness spell for 1 hour.',
        type_id: 7,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oil of Sharpness',
        description: 'This clear, gelatinous oil sparkles with tiny, ultrathin silver shards. The oil can coat one slashing or piercing weapon or up to 5 pieces of slashing or piercing ammunition. Applying the oil takes 1 minute. For 1 hour, the coated item is magical and has a +3 bonus to attack and damage rolls.',
        type_id: 5,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Oil of Slipperiness',
        description: 'This sticky black unguent is thick and heavy in the container, but it flows quickly when poured. The oil can cover a Medium or smaller creature, along with the equipment it’s wearing and carrying (one additional vial is required for each size category above Medium). Applying the oil takes 10 minutes. The affected creature then gains the effect of a freedom of movement spell for 8 hours. Alternatively, the oil can be poured on the ground as an action, where it covers a 10-foot square, duplicating the effect of the grease spell in that area for 8 hours.',
        type_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Philter of Love',
        description: 'The next time you see a creature within 10 minutes after drinking this philter, you become charmed by that creature for 1 hour. If the creature is of a species and gender you are normally attracted to, you regard it as your true love while you are charmed.',
        type_id: 6,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Animal Friendship',
        description: 'When you drink this potion, you can cast the animal friendship spell (save DC 13) for 1 hour at will.Agitating this muddy liquid brings little bits into view: a fish scale, a hummingbird tongue, a cat claw, or a squirrel hair.',
        type_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Clairvoyance',
        description: 'When you drink this potion, you gain the effect of the clairvoyance spell. An eyeball bobs in this yellowish liquid but vanishes when the potion is opened.',
        type_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Climbing',
        description: 'When you drink this potion, you gain a climbing speed equal to your walking speed for 1 hour. During this time, you have advantage on Strength (Athletics) checks you make to climb. The potion is separated into brown, silver, and gray layers resembling bands of stone. Shaking the bottle fails to mix the colors.',
        type_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Diminution',
        description: 'WWhen you drink this potion, you gain the “reduce” effect of the enlarge/reduce spell for 1d4 hours (no concentration required). The red in the potion’s liquid continuously contracts to a tiny bead and then expands to color the clear liquid around it. Shaking the bottle fails to interrupt this process.',
        type_id: 6,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Flying',
        description: 'When you drink this potion, you gain a flying speed equal to your walking speed for 1 hour and can hover. If you’re in the air when the potion wears off, you fall unless you have some other means of staying aloft. This potion’s clear liquid floats at the top of its container and has cloudy white impurities drifting in it.',
        type_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Gaseous Form',
        description: 'When you drink this potion, you gain the effect of the gaseous form spell for 1 hour (no concentration required) or until you end the effect as a bonus action. This potion’s container seems to hold fog that moves and pours like water.',
        type_id: 7,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Speed',
        description: 'When you drink this potion, you gain the effect of the haste spell for 1 minute (no concentration required). The potion’s yellow fluid is streaked with black and swirls on its own.',
        type_id: 4,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Water Breathing',
        description: 'You can breathe underwater for 1 hour after drinking this potion. Its cloudy green fluid smells of the sea and has a jellyfish-like bubble floating in it.',
        type_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Resistance',
        description: 'When you drink this potion, you gain resistance to one type of damage for 1 hour.',
        type_id: 4,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Poison',
        description: 'This concoction looks, smells, and tastes like a potion of healing or other beneficial potion. However, it is actually poison masked by illusion magic. An identify spell reveals its true nature.If you drink it, you take 3d6 poison damage, and you must succeed on a DC 13 Constitution saving throw or be poisoned. At the start of each of your turns while you are poisoned in this way, you take 3d6 poison damage. At the end of each of your turns, you can repeat the saving throw. On a successful save, the poison damage you take on your subsequent turns decreases by 1d6. The poison ends when the damage decreases to 0.',
        type_id: 5,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Invisibility',
        description: 'This potion’s container looks empty but feels as though it holds liquid. When you drink it, you become invisible for 1 hour. Anything you wear or carry is invisible with you. The effect ends early if you attack or cast a spell.',
        type_id: 6,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Mind Reading',
        description: 'When you drink this potion, you gain the effect of the detect thoughts spell . The potion’s dense, purple liquid has an ovoid cloud of pink floating in it.',
        type_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Heroism',
        description: 'For 1 hour after drinking it, you gain 10 temporary hit points that last for 1 hour. For the same duration, you are under the effect of the bless spell (no concentration required). This blue potion bubbles and steams as if boiling.',
        type_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Healing',
        description: 'You regain hit points when you drink this potion. The number of hit points depends on the potion’s rarity. Whatever its potency, the potion’s red liquid glimmers when agitated.',
        type_id: 1,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Growth',
        description: 'When you drink this potion, you gain the “enlarge” effect of the enlarge/reduce spell for 1d4 hours (no concentration required). The red in the potion’s liquid continuously expands from a tiny bead to color the clear liquid around it and then contracts. Shaking the bottle fails to interrupt this process.',
        type_id: 6,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Potion of Giant Strength',
        description: 'When you drink this potion, your Strength score changes for 1 hour.This potion’s transparent liquid has floating in it a sliver of fingernail from a giant of the appropriate type. The potion of frost giant strength and the potion of stone giant strength have the same effect.',
        type_id: 4,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Potions', null, {});
  }
};
