const weaponData = {
  // ----------------------------------------------- UR -----------------------------------------------
  Lucifer: {
    firstWeapon: {
      name: 'Doomsday Blade',
      bonusTier1: 'After using "Fallen Flames", gain a buff of 30% Lifesteal.',
      bonusTier2: 'Gains a buff of 45% Lifesteal.',
      bonusTier3: 'Gains a buff of 60% Lifesteal.',
      bonusTier4:
        'When Lucifer uses "Fallen Stars" as a Fallen Angel, remove all his debuffs (this skill can be used when controlled).',
    },
  },
  Iset: {
    firstWeapon: {
      name: 'Resplendent Lotus',
      bonusTier1: '"Purifying Incantation" targets are increased to 3.',
      bonusTier2:
        'Additionally, "Purifying Incantation" increases Crit Resistance by 10% for ally targets.',
      bonusTier3:
        'After "Revival Ritual", the revived Hero restores 240 Energy.',
      bonusTier4: '15s after the battle starts, Iset gets an ankh.',
    },
  },
  Typhon: {
    firstWeapon: {
      name: 'Storm Blade',
      bonusTier1:
        'Whenever the "Titan Shield" is destroyed, it will regenerate after 20s.',
      bonusTier2:
        'Whenever a "Titan Shield" is generated, all demon snakes also gain a shield of 25% of the "Titan Shield\'s" value.',
      bonusTier3: 'Reduces the regeneration time of the "Titan Shield" to 12s.',
      bonusTier4:
        'Increases the "Titan Shield" value for snakes\' shields to 50%.',
    },
  },
  Lilith: {
    firstWeapon: {
      name: 'Skysunder Masks',
      bonusTier1:
        "For every ally Hero on battlefield, increase Lilith's Defense by 10%. When an ally Hero dies, increase Lilith's Attack by 5%.",
      bonusTier2:
        "When the first ally Guardian Hero dies, increase Lilith's Crit Damage by 50% for 6s.",
      bonusTier3:
        'When the first ally Shadowarch Hero dies, enemy Heroes cannot release their Ultimate for 6s.',
      bonusTier4:
        "For every ally Hero on battlefield, increase Lilith's Defense by 20%. When an ally Hero dies, increase Lilith's Attack by 10%.",
    },
  },
  Nuwa: {
    firstWeapon: {
      name: 'Five-Colored Stones',
      bonusTier1:
        'For 5s after releasing "Mend the Sky", all ally Heroes will be immune to control.',
      bonusTier2:
        'For 10s after releasing "Mend the Sky", all ally Heroes will be immune to control.',
      bonusTier3:
        'During "Lustrous Land", the Energy removed from the target will be transferred to Nuwa.',
      bonusTier4: 'At the beginning of battle, Nuwa uses "Pillars of the Sky".',
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------- SSR -----------------------------------------------
  // ------------------------------------- LUMINARCH -------------------------------------
  Zeus: {
    firstWeapon: {
      name: 'Cyclopean Masterbolt',
      bonusTier1:
        'After Zeus releases his Ultimate for the first time, stun targets for 2.5s.',
      bonusTier2:
        'After Zeus releases his Ultimate for the first 2 times, stun targets for 2.5s.',
      bonusTier3:
        'After Zeus releases his Ultimate for the first 3 times, stun targets for 2.5s.',
      bonusTier4: "Increases Ultimate's damage dealt by 30%.",
    },
  },
  Athena: {
    firstWeapon: {
      name: 'Ensouled Aegis',
      bonusTier1:
        'When "Aegis of Light" shield is destroyed, allies recover 10% of their lost Health.',
      bonusTier2:
        'Allies recover 20% of their lost Health while under "Aegis of Light\'s" protection.',
      bonusTier3:
        'When the "Aegis of Light" shield is active, increase Crit Resistance by 20% for allies under its protection.',
      bonusTier4:
        'Allies recover 30% of their lost Health while under "Aegis of Light\'s" protection.',
    },
  },
  Susanoo: {
    firstWeapon: {
      name: 'Totsuka-no-Tsurugi',
      bonusTier1: 'Susanoo gains 20 energy for every Crit dealt.',
      bonusTier2:
        'The first sword hit of "Phantom Furry" deals additional damage equal to 20% of target\'s current health.',
      bonusTier3: 'Susanoo gains 30 energy for every Crit dealt.',
      bonusTier4:
        'The last sword hit of "Phantom Furry" deals additional damage equal to 20% of target\'s current health.',
    },
  },
  Artemis: {
    firstWeapon: {
      name: 'Olympian Aetherbow',
      bonusTier1:
        'When Artemis stuns a target, increase her Attack Speed by 25% for 3s.',
      bonusTier2:
        'If there are no enemies close to Artemis, increase her Crit Chance by 5%.',
      bonusTier3:
        'If there are no enemies close to Artemis, increase her Crit Damage by 15%.',
      bonusTier4:
        "If Artemis deals Crit Damage with her auto-attack, deal an extra 4% of target's max Health as damage (total damage cannot exceed 300% of Artemis's Attack).",
    },
  },
  Dionysus: {
    firstWeapon: {
      name: 'Ivy Thyrus Staff',
      bonusTier1: 'Decreases "Drunken" enemies\' Defense by 20%.',
      bonusTier2: 'Decreases "Drunken" enemies\' Defense by 40%.',
      bonusTier3: 'Decreases "Drunken" enemies\' Defense by 60%.',
      bonusTier4:
        'If enemy inflicted with "Drunken" dies before its duration ends, re-start "Drunken" on the nearest enemy.',
    },
  },
  Thor: {
    firstWeapon: {
      name: 'Dwarven Mjolnir',
      bonusTier1:
        'While "Divine Descent" is active, increases Thor\'s Attack Speed by 30%.',
      bonusTier2:
        'If an enemy unit is killed while "Divine Descent" is active, increase the duration by 5s (can be triggered 1 time every time the skill is used).',
      bonusTier3:
        'While "Divine Descent" is active, increases Thor\'s Attack Speed by 60%.',
      bonusTier4:
        'While "Divine Descent" is active, increases Thor is immune to control.',
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- SHADOWARCH -------------------------------------
  Persephone: {
    firstWeapon: {
      name: "Hell's Butterflies",
      bonusTier1:
        'Increases the number of targets of "Nether Butterflies" to 2.',
      bonusTier2:
        'When the target of "Nether Butterflies" has no buffs, deal additional damage equal to 5% of their current health.',
      bonusTier3: 'Deal additional damage equal to 5% of their current health.',
      bonusTier4:
        'Increases the number of targets of "Nether Butterflies" to 3.',
    },
  },
  Izanami: {
    firstWeapon: {
      name: 'Lamp of Yomi',
      bonusTier1:
        'When there is/are 1/2/3 enemy(ies) on the battlefield, "Breath of the Dead" deals 24%/16%/8% more damage.',
      bonusTier2: '"Breath of the Dead" deals 36%/24%/12% more damage.',
      bonusTier3:
        'Collect an extra 1 Wandering Ghost(s) when using "Specter Impact".',
      bonusTier4: '"Breath of the Dead" deals 48%/32%/16% more damage.',
    },
  },
  Hades: {
    firstWeapon: {
      name: 'Bident of Hell',
      bonusTier1:
        "After being summoned, Hellhound's first attack will stun the enemy for 2s.",
      bonusTier2:
        'If "Death Scythe" does not kill the target, return 500 Energy to Hades.',
      bonusTier3:
        'Reduces the target\'s healing received by 100% for the duration of "Death Scythe".',
      bonusTier4: "Hellhound's first attack will stun the enemy for 3s.",
    },
  },
  Medusa: {
    firstWeapon: {
      name: 'Poisonous Fangs',
      bonusTier1:
        'Increases Attack Speed by 40% for 5s after releasing "Petrifying Glare".',
      bonusTier2: 'Increases Attack Speed by 70% for "Petrifying Glare".',
      bonusTier3:
        'After using the skill, "Venomous Snake", absorb removed Energy from the target.',
      bonusTier4: 'Increases Attack Speed by 100% for "Petrifying Glare".',
    },
  },
  Anubis: {
    firstWeapon: {
      name: 'Judgement Scythe',
      bonusTier1:
        'Anubis recovers 5% of Health each time one of his mummies dies.',
      bonusTier2:
        'Anubis recovers 10% of Health each time one of his mummies dies.',
      bonusTier3:
        'Anubis recovers 15% of Health each time one of his mummies dies.',
      bonusTier4:
        'Anubis gains 10 Energy each time when one of his mummies attacks.',
    },
  },
  Hela: {
    firstWeapon: {
      name: 'Laevateinn',
      bonusTier1:
        'The enemy targeted by "Dark Cure" will also be silenced for 3s.',
      bonusTier2: '"Dark Cure" damage increased by 15%.',
      bonusTier3: 'After using "Dark Cure" 3x, increase healed targets to 3.',
      bonusTier4: '"Dark Cure" damage increased by 30%.',
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- GUARDIAN -------------------------------------
  Hercules: {
    firstWeapon: {
      name: 'Lion Killer',
      bonusTier1:
        'Increases Hercules\' damage dealt by 5% after "Sword Storm" is triggered. Stackable up to 10 times.',
      bonusTier2: 'Stackable up to 20 times.',
      bonusTier3: 'Decreases damage taken from enemy auto-attacks by 35%.',
      bonusTier4:
        'When "Sword Storm" stacks 20 times, increase all healing received during "Provoke" by 50%.',
    },
  },
  'Lu Bu': {
    firstWeapon: {
      name: 'Heaven Scorcher Halberd',
      bonusTier1:
        "If an enemy dies within 5s after being hit by Lu Bu, increase Lu Bu's Attack Speed by 50% for 5.",
      bonusTier2:
        'If "Halfmoon Slash" only hits 1 enemy, opponent takes 50% extra damage for the next 8s.',
      bonusTier3:
        'If "Halfmoon Slash" only hits 2 enemies, opponents take 30% extra damage for the next 8s.',
      bonusTier4:
        "When Lu Bu's Health is below 50%, he is immune to control skills.",
    },
  },
  'Ganjiang & Moye': {
    firstWeapon: {
      name: 'Ganjiang Moye Blade',
      bonusTier1:
        'Increases Attack Speed by 40% for 5s after releasing "Twin Souls".',
      bonusTier2:
        'Increases Attack Speed by 70% for 5s after releasing "Twin Souls".',
      bonusTier3:
        'Increases Attack Speed by 100% for 5s after releasing "Twin Souls".',
      bonusTier4: '"Twin Souls" can be released 2 times.',
    },
  },
  'Joan of Arc': {
    firstWeapon: {
      name: 'Fleur-de-Lys Lance',
      bonusTier1:
        'Heroes protected by "Deus le Volt" convert 10% of the blocked damage into Health recovered.',
      bonusTier2: 'Convert 20% of damage taken into Health recovered.',
      bonusTier3: 'Convert 30% of damage taken into Health recovered.',
      bonusTier4:
        'Increases the number of allies protected by "Deus le Volt" to 2 (with the lowest Health).',
    },
  },
  Cleopatra: {
    firstWeapon: {
      name: 'Imperial Caduceus',
      bonusTier1:
        'For every stack of "Snake Poison" on target, increase Crit Chance by 3% when attacking those inflicted.',
      bonusTier2:
        'Add 1 additional stack(s) of "Snake Poison" when Cleopatra deals Crit Damage to her target.',
      bonusTier3:
        'When an enemy is inflicted with "Snake Poison" dies, their stacks will be transferred to all nearby enemies.',
      bonusTier4:
        'Increases Crit Damage dealt by 35% to enemy(ies) with 5 stacks of "Snake Poison".',
    },
  },
  Cassandra: {
    firstWeapon: {
      name: 'Fatesfury Crystal Ball',
      bonusTier1:
        "Increases ally Heroes' healing received by 2% whenever they are attacked (up to 30%).Reduced enemy Heroes' healing received by 2% whenever they are attacked (up to 30%).",
      bonusTier2: "Increases target's healing received by 50%.",
      bonusTier3: "Reduces target's healing received by 50%.",
      bonusTier4:
        'Increases ally Heroes Attack by 20% when their Health is above 50%.',
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- VERDIAN -------------------------------------
  Nagakanya: {
    firstWeapon: {
      name: 'Master Dragon Pearl',
      bonusTier1:
        'When an ally target is protected by "Aqua Barrier" restore 15 Energy each second for 5s to them.',
      bonusTier2: 'Restore 20 Energy each second for 5s to them.',
      bonusTier3: 'Restore 25 Energy each second for 5s to them.',
      bonusTier4:
        'Remove all Debuffs on ally Heroes when releasing "Blessing of Rain".',
    },
  },
  'Tamamo no Mae': {
    firstWeapon: {
      name: 'Nine-Tailed Fox Fan',
      bonusTier1:
        'Increases Attack Speed by 20% after 8 "Fox Fires" are summoned.',
      bonusTier2:
        'Increases Crit Chance by 20% after 12 "Fox Fires" are summoned.',
      bonusTier3:
        'Increases Crit Damage by 20% after 16 "Fox Fires" are summoned.',
      bonusTier4: 'When "Phantom Dash" is triggered, summon 1 "Fox Fire".',
    },
  },
  Idun: {
    firstWeapon: {
      name: 'Golden Apple Tree Branch',
      bonusTier1:
        'The Golden Apples from "Idun\'s Salvation" recover an extra 10% of the target\'s Health within 6s.',
      bonusTier2: "Recover an extra 15% of the target's Health.",
      bonusTier3: "Recover an extra 20% of the target's Health.",
      bonusTier4: 'Reduces the cooldown of "Idun\'s Salvation" by 4s.',
    },
  },
  Gaia: {
    firstWeapon: {
      name: 'Earthen Warhammer',
      bonusTier1: 'Increases the stack limit of "Earthly Vein" to 8 stacks.',
      bonusTier2: 'Increases the stack limit of "Earthly Vein" to 10 stacks.',
      bonusTier3:
        'The last hit of "Primal Might" will knock targets into air for 1.5s.',
      bonusTier4:
        'Decreases the regeneration cooldown of "Rocky Semblance" to 7s.',
    },
  },
  Oberon: {
    firstWeapon: {
      name: 'Myrwood Twinblades',
      bonusTier1:
        'Increases Attack Speed by 20% for 3s after using an active skill.',
      bonusTier2: 'Increases Attack Speed by 30%.',
      bonusTier3: 'Increases Attack Speed by 40%',
      bonusTier4: 'Increases Dodge by 75% for 8s after releasing "Homecoming".',
    },
  },
  Flora: {
    firstWeapon: {
      name: 'Bloodred Thyrus',
      bonusTier1: 'Increases bounces by 1 when using "Drifting Petals".',
      bonusTier2: 'Increases bounces by 2 when using "Drifting Petals".',
      bonusTier3: 'Increases the duration of "Holy Fluorescence" to 10s.',
      bonusTier4: 'Increases bounces by 3 when using "Drifting Petals".',
    },
  },
};

export default weaponData;

// const dummy = {
//   heroName: {
//     firstWeapon: {
//       name: '',
//       bonusTier1: '',
//       bonusTier2: '',
//       bonusTier3: '',
//       bonusTier4: '',
//     },
//     secondWeapon: {
//       name: '',
//       bonusTier1: '',
//       bonusTier2: '',
//       bonusTier3: '',
//       bonusTier4: '',
//     },
//   },
// };
