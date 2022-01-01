const divinityNotableData = {
  Asterial: {
    Supernova: {
      bonus:
        'After releasing Ultimate for the first time, increase damage dealt by 30% for 8s.',
      cost: 3,
    },
    Annihilation: {
      bonus: 'Deals an additional 150% damage to enemy summons/minions.',
      cost: 3,
    },
    Gemini: {
      bonus:
        'After receiving a healing skill, an additional recovery of 6% of Health is algo generated.This effect can only be triggered once every 5s.',
      cost: 1,
    },
    'Meteor Shower': {
      bonus:
        "After releasing an Ultimate, deal extra damage to 1 random enemy(ies) equal to 1x 15% of target's current Health.",
      cost: 1,
    },
    'Full Moon': {
      bonus:
        'Whenever this Hero dodges an Attack, increase Attack Speed by 20% for 3s.',
      cost: 2,
    },
    'New Moon': {
      bonus: 'After using an active skill, increase Dodge by 50% for 2s.',
      cost: 3,
    },
    'Black Hole': {
      bonus:
        'After surpassing 300 Energy for the first time, remove all the Energy from this Hero and the enemy with the highest Energy.',
      cost: 2,
    },
    Aurora: {
      bonus:
        'At the beginning of the battle, the enemy Hero in the same formation position across from this Hero will have 50% less Accuracy for 5s.',
      cost: 1,
    },
    Spotlight: {
      bonus:
        "Hero's Attacks cannot be dodged. Additionally, every 1% of Hero Accuracy is converted into 2% of Crit Damage for the battle.",
      cost: 3,
    },
    Night: {
      bonus: "Increases damage dealt by Hero's summons by 40%.",
      cost: 3,
    },
  },
  // ------------------------------------------------------------------------------------------------------------------------------------------------
  Devoid: {
    Phantom: {
      bonus: 'Healing received cannot be reduced.',
      cost: 1,
    },
    Engulf: {
      bonus:
        'After each of the first 2 Ultimates, Hero gains a buff which increases Lifesteal by 12%.',
      cost: 2,
    },
    'Energy Field': {
      bonus:
        "Ally Hero with the highest Combat Power is immune to first lethal damage. After, they will gain a shield with 30% of this Hero's current Health for 8s. This effect can be triggered 1 time(s) per battle.",
      cost: 3,
    },
    Vexation: {
      bonus:
        'When hitting an enemy with auto-attacks, reduce their Hit Energy Restoration by 50%.',
      cost: 1,
    },
    'Broken Mirror': {
      bonus: 'Reduced Hit Energy Restoration by 35% for nearby enemies.',
      cost: 2,
    },
    Excitement: {
      bonus: 'Restores 150 Energy within the first 5s of battle.',
      cost: 3,
    },
    'Time-lapse': {
      bonus:
        "Hero's auto-attacks have a 20% chance to stun the target for 1.5s.",
      cost: 2,
    },
    'Spirit Flash': {
      bonus:
        'After the first time any enemy releases their Ultimate, generate a shield equal to 50% of max Health for 10s to protect this Hero.',
      cost: 3,
    },
    Animus: {
      bonus:
        'Auto-Attacks have a 20% chance of generating a shield equal to their damage dealt.',
      cost: 1,
    },
  },
  // ------------------------------------------------------------------------------------------------------------------------------------------------
  Immortality: {
    Symbiosis: {
      bonus:
        "At the beginning of battle, gain a shield equal to 15% of this Hero's max Health for 8s.",
      cost: 1,
    },
    Waterdrop: {
      bonus: 'Reduced Crit damage taken by 35%.',
      cost: 2,
    },
    Savvy: {
      bonus: 'Increases damage dealth from active skills by 25%.',
      cost: 3,
    },
    Tenacious: {
      bonus: "Increases all shields' strength by 20%.",
      cost: 1,
    },
    Resonance: {
      bonus: 'When this Hero is killed, stun nearby enemies for 3s.',
      cost: 2,
    },
    Recovery: {
      bonus:
        'During the first 15s of battle, recover 4% of max Health every second.',
      cost: 3,
    },
    Transcend: {
      bonus: 'Dodge the first enemy damage dealt.',
      cost: 1,
    },
    Sunder: {
      bonus: 'Increases damage dealt to shields by 100%.',
      cost: 2,
    },
    Wrath: {
      bonus:
        'For every 6% of Health lost, increase Attack by 1% (to a maximum of 30 stacks).',
      cost: 3,
    },
  },
  // ------------------------------------------------------------------------------------------------------------------------------------------------
  Primeval: {
    Embroilment: {
      bonus:
        'When Health is above 50%, increase damage dealt by 10%. When Health is below 50%, reduce damage taken by 10%.',
      cost: 1,
    },
    Corrosion: {
      bonus: "When an auto-attack hits, reduce target's Defense by 30% for 5s.",
      cost: 2,
    },
    'Death Waiver': {
      bonus:
        'The first time this Hero takes lethal damage, gain full immunity for 2s instead.',
      cost: 3,
    },
    Inspiration: {
      bonus:
        'Whenever a skill targets an ally, increase their Attack and Defense by 10% for 5s.',
      cost: 1,
    },
    Purify: {
      bonus:
        'When healing an ally, there is a 50% chance to remove all debuffs inflicted upon them.',
      cost: 2,
    },
    Pristine: {
      bonus: 'When Health is above 75%, increase Defense by 80%.',
      cost: 3,
    },
    'Primal Totem': {
      bonus:
        'After releasing an Ultimate, gain immunity from control skills for 5s.',
      cost: 2,
    },
    Colossus: {
      bonus:
        "Increases Attack by amount equal to 50% of Hero's Defense during battle.",
      cost: 3,
    },
    Colmination: {
      bonus: 'Increase Attack by 1% every 4s during battle.',
      cost: 1,
    },
  },
  // ------------------------------------------------------------------------------------------------------------------------------------------------
  Psyche: {
    Sprout: {
      bonus:
        '10s after the battle begins, remove all debuffs and recover 10% Health.',
      cost: 1,
    },
    'Divine-Fire': {
      bonus:
        'Increases Energy by 2 every second. This Energy Does not decrease (except when triggering Ultimate).',
      cost: 2,
    },
    Deftness: {
      bonus:
        'Every 3 auto-attack hits, deal an extra 65% damage to the target. This damage is treated as True Damage.',
      cost: 3,
    },
    Torment: {
      bonus: 'Increase damage dealth to enemies with a debuff on them by 12%.',
      cost: 1,
    },
    'Collective Fervor': {
      bonus:
        'Whenever an ally Hero releases an Ultimate, restore 30 Energy to them and this hero.',
      cost: 3,
    },
    Prevail: {
      bonus:
        "If enemy's Health is more than this Hero's, reduce enemy's damage dealth by 18%. If enemy's Health is less, increase this Hero's damage dealt by 18%.",
      cost: 2,
    },
    'Self-Hypnosis': {
      bonus:
        'When healing an ally Hero, recover 20% of the overall Health recovered to the healer themselves.',
      cost: 1,
    },
    Panacea: {
      bonus: 'Increase maximum Health by 30% during battle.',
      cost: 3,
    },
    Maestro: {
      bonus: 'After applying a control skill, increae Attack by 10% for 5s.',
      cost: 2,
    },
  },
};

export default divinityNotableData;
