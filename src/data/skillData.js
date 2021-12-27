const skillData = {
  // ----------------------------------------------- UR -----------------------------------------------
  Lucifer: {
    skill1: {
      type: 'Ultimate',
      name: 'Holy Chaos',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Lucifer folds his wings to charge and then bursts out an aura of holy energy from the sky for ',
          },
          { type: 'value', content: '2.5s' },
          { type: 'text', content: ', dealing ' },
          { type: 'value', content: '70%' },
          { type: 'text', content: ' damage to all enemies every ' },
          { type: 'value', content: '0.5s' },
          {
            type: 'text',
            content:
              ' and knocking them all back. At the same time, Lucifer transforms into a Fallen Angel.',
          },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'As a ' },
          { type: 'status', content: 'Fallen Angel' },
          { type: 'text', content: ', Lucifer also removes ' },
          { type: 'value', content: '30' },
          { type: 'text', content: ' Energy from the every enemy hit.' },
        ],
        lv2: 'Deals 75% damage',
        lv3: 'Removes 40 Energy every hit',
        lv4: 'Deals 80% damage',
      },
    },
    skill2: {
      type: 'Passive',
      name: 'Fallen Flames',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'After 2 auto-attacks, Lucifer enchants his sword with flame and slashes the target to deal ',
          },
          { type: 'value', content: '2x 200%' },
          {
            type: 'text',
            content:
              ' damage. The flames also deal 50% damage to nearby enemies. As a ',
          },
          { type: 'status', content: 'Fallen Angel' },
          {
            type: 'text',
            content: ", Lucifer's sword will be enchanted with flames after ",
          },
          { type: 'value', content: 'every' },
          { type: 'text', content: ' auto-attack.' },
        ],
        lv2: 'Deals 210% damage',
        lv3: 'Deals 220% damage',
        lv4: 'Deals 230% damage',
      },
    },
    skill3: {
      type: 'Passive',
      name: 'Imperious Glance',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              "Lucifer's Attack Energy Restoration and Hit Energy Restoration are increased by ",
          },
          { type: 'value', content: '20%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'After using an active skill, increase Dodge by 8% for 5s. This effect can stack up to 3 times.',
        lv3: 'Attack Energy Restoration and Hit Energy Restoration increases by 30%.',
        lv4: 'Increases Dodge by 10%',
      },
    },
    skill4: {
      type: 'Active',
      name: 'Fallen Stars',
      description: {
        lv1: [
          { type: 'text', content: 'Lucifer elevates into the air and fires ' },
          { type: 'value', content: '4' },
          { type: 'text', content: ' fallen stars, each dealing ' },
          { type: 'value', content: '140%' },
          {
            type: 'text',
            content:
              ' damage to 1 random enemy. During this time, Lucifer cannot be targeted.',
          },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'As ' },
          { type: 'status', content: 'Fallen Angel' },
          { type: 'text', content: ', Lucifer also stuns the target for ' },
          { type: 'value', content: '0.1s' },
          { type: 'text', content: '.' },
        ],
        lv2: 'As Fallen Angel, Lucifer also stuns hit target for 0.5s',
        lv3: 'Deals 160% damage',
        lv4: 'Fires 5x fallen stars',
      },
    },
  },
  Iset: {
    skill1: {
      type: 'Ultimate',
      name: 'Revival Ritual',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              "Iset chant for a revival ankh. If there isn't one in the battlefield already, one will be generated after her spell is complete. If there is already a revival ankh, Iset will increase her Attack by ",
          },
          { type: 'value', content: '20%' },
          {
            type: 'text',
            content:
              ' after the chant is completed instead (the effect is stackable). If her chanting is interrupted, ',
          },
          { type: 'value', content: '500' },
          { type: 'text', content: ' energy will be returned to her.' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content:
              'When an allied Hero is about to die, they will consume the ankh to revive themselves after ',
          },
          { type: 'value', content: '6s' },
          { type: 'text', content: ', recovering ' },
          { type: 'value', content: '36%' },
          { type: 'text', content: ' of their Health.' },
        ],
        lv2: 'Additionally, Iset is immune to control effects for the 2s while she chants',
        lv3: 'Increases Health recovered upon revival to 48%',
        lv4: "Increases the amount of Iset's Attack boost to 25%",
      },
    },
    skill2: {
      type: 'Active',
      name: 'Ode to Sorcery',
      description: {
        lv1: [
          { type: 'text', content: 'Iset causes all allies to gain ' },
          { type: 'value', content: '10%' },
          { type: 'text', content: ' of her Attack for ' },
          { type: 'value', content: '8s' },
          {
            type: 'text',
            content: '. Every second of this time, Iset restores ',
          },
          { type: 'value', content: '20%' },
          {
            type: 'text',
            content: ' of the Energy gained by these Heroes to herself.',
          },
        ],
        lv2: "Allies increase their Attack by 12.5% of Iset's Attack",
        lv3: "Increases Iset's Energy restored to 25% of allies' amount gained",
        lv4: "Allies increase their Attack by 15% of Iset's Attack",
      },
    },
    skill3: {
      type: 'Active',
      name: 'Purifying Incantation',
      description: {
        lv1: [
          { type: 'text', content: 'Iset removes all debuffs on ' },
          { type: 'value', content: '2' },
          { type: 'text', content: ' random ally Heroes. For ' },
          { type: 'value', content: '4s' },
          {
            type: 'text',
            content:
              ' afterwards targets are immune to debuffs and damage taken is reduced by ',
          },
          { type: 'value', content: '15%' },
          { type: 'text', content: '.' },
        ],
        lv2: 'Increases duration of effects to 5s',
        lv3: 'Reduced allies damage taken by 20% for the duration',
        lv4: 'Increases duration of effects to 6s',
      },
    },
    skill4: {
      type: 'Passive',
      name: 'Balanced Clock',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'At the beginning of the battle, Iset sets a clock in front of her. Every ',
          },
          { type: 'value', content: '15s' },
          {
            type: 'text',
            content:
              ', this device will cause additional damage to all enemy units equal to ',
          },
          { type: 'value', content: '12%' },
          {
            type: 'text',
            content:
              ' of their own damage taken during that period. This additional damage is True Damage.',
          },
        ],
        lv2: 'Increases True Damage dealt to 14%',
        lv3: 'Increases True Damage dealt to 16%',
        lv4: 'Increases True Damage dealt to 18%',
      },
    },
  },
  Typhon: {
    skill1: {
      type: 'Ultimate',
      name: 'Chaos Storm',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              "Typhon invokes a Chaos Storm, increasing all allies' Attack by ",
          },
          { type: 'value', content: '20%' },
          { type: 'text', content: ' and Attack Speed by ' },
          { type: 'value', content: '20%' },
          { type: 'text', content: ' for ' },
          { type: 'value', content: '8s' },
          {
            type: 'text',
            content: '. During the same time, the skill removes ',
          },
          { type: 'value', content: '5%' },
          {
            type: 'text',
            content:
              " of all allies' current Health per second as True Damage. These effects cannot be dispersed.",
          },
        ],
        lv2: 'Increases Attack by 25%',
        lv3: 'Increases Attack Speed by 30%',
        lv4: 'Increases Attack by 30%',
      },
    },
    skill2: {
      type: 'Active',
      name: 'Snake Flurry',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Typhon throws demon snakes at up to 3 random targets, each dealing damage equal to ',
          },
          { type: 'value', content: '100%' },
          {
            type: 'text',
            content:
              " of Typhon's Attack. Depending on the snake's color, it will also inflict a unique debuff.",
          },
          { type: 'line-break', content: '' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content: "Red snake: Reduced the target's Defense by ",
          },
          { type: 'value', content: '16%' },
          { type: 'text', content: ' for 15s.' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content: "Green snake: Reduces the target's healing by ",
          },
          { type: 'value', content: '12%' },
          { type: 'text', content: ' for 15s.' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content: "Blue snake: Reduces the target's Dodge by ",
          },
          { type: 'value', content: '8%' },
          { type: 'text', content: ' for 15.' },
          { type: 'line-break', content: '' },
          { type: 'line-break', content: '' },
          {
            type: 'text',
            content: 'Each debuff effect can stack up to 3 times.',
          },
        ],
        lv2: 'Reduces Defense by 20%',
        lv3: 'Reduces Healing by 15%',
        lv4: 'Reduces Dodge by 10%',
      },
    },
    skill3: {
      type: 'Passive',
      name: 'Monster King',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'After an ally dies, a demon snake of a random color is spawned from where they fell. The snake inherits ',
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: " of all Typhon's Attributes but " },
          { type: 'value', content: '75%' },
          { type: 'text', content: ' of his max Health.' },
          { type: 'line-break', content: '' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Red snake: A melee auto-attack deals ' },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage to 1 target.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Green snake: A ranged auto-attack deals ' },
          { type: 'value', content: '50%' },
          { type: 'text', content: ' damage to 2 targets.' },
          { type: 'line-break', content: '' },
          { type: 'text', content: 'Blue snake: A melee auto-attack deals ' },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage to 1 target.' },
        ],
        lv2: 'Additionally, whenever a snake\'s auto-attack deals a Crit, it adds 1 layer of "Snake Flurry" debuff to the target',
        lv3: 'Additionally, every 3 times it attacks, the snake recovers 5% of its max Health',
        lv4: 'Additionally, every 3 times it attacks, the snake recovers 8% of its max Health',
      },
    },
    skill4: {
      type: 'Passive',
      name: 'Titan Shield',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'At the beginning of the battle, Typhon generates a Titan Shield that lasts the entire battle. The shield can withstand damage equal to ',
          },
          { type: 'value', content: '50%' },
          {
            type: 'text',
            content:
              " of Typhon's max Health. When the Titan Shield is destroyed, it will deal ",
          },
          { type: 'value', content: '15%' },
          {
            type: 'text',
            content: " of Typhon's max Health as True Damage to all enemies.",
          },
        ],
        lv2: "Additionally, increase Typhon's Defense by 100%",
        lv3: "Additionally, increase Typhon's Defense by 125%",
        lv4: "Additionally, increase Typhon's Defense by 150%",
      },
    },
  },
  Lilith: {
    skill1: {
      type: 'Ultimate',
      name: 'Dual Shadows',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'If allies Guardian > Shadowarch, Lilith wears a human mask. If allies Shadowarch > Guardian, she wears a demon mask. If equal, a random mask. ',
          },
          { type: 'status', content: 'In human mask' },
          { type: 'text', content: ', she deals ' },
          { type: 'value', content: '550%' },
          {
            type: 'text',
            content:
              " damage to 1 enemy. If the target is killed, the extra damage will be dealt to all other enemies (damage ignores enemies' Defense). ",
          },
          { type: 'status', content: 'In demon mask' },
          { type: 'text', content: ', she deals ' },
          { type: 'value', content: '325%' },
          {
            type: 'text',
            content:
              ' damage to all enemies. If no target is killed, an additional ',
          },
          { type: 'value', content: '325%' },
          { type: 'text', content: ' damage will be dealt to a random enemy.' },
        ],
        lv2: 'Human mask: Deals 590% damage; Demon Mask: Deals 350% damage',
        lv3: 'Human mask: Deals 630% damage; Demon Mask: Deals 375% damage',
        lv4: 'Human mask: Deals 670% damage; Demon Mask: Deals 400% damage',
      },
    },
    skill2: {
      type: 'Active',
      name: 'Shadow Lightning',
      description: {
        lv1: [
          { type: 'text', content: 'When Lilith wears a ' },
          { type: 'status', content: 'human mask' },
          {
            type: 'text',
            content: ', she turns into a shadow and deals 3 waves of ',
          },
          { type: 'value', content: '100%' },
          { type: 'text', content: ' damage to 1 enemy; when she wears the ' },
          { type: 'status', content: 'demon mask' },
          {
            type: 'text',
            content: ', she teleports between 3 enemies and deals ',
          },
          { type: 'value', content: '150%' },
          { type: 'text', content: ' damage to each' },
        ],
        lv2: 'Additionally, with the human mask, recovers 5% of max Health; with the demon mask, stuns the target for 1s',
        lv3: 'With the human mask, deals 110% damage; with the demon mask, deals 160% damage to each target',
        lv4: 'With the human mask, deals 120% damage; with the demon mask, deals 170% damage to each target',
      },
    },
    skill3: {
      type: 'Active',
      name: 'Dark Ritual',
      description: {
        lv1: [
          {
            type: 'text',
            content:
              'Lilith begins a ritual 5s after the start of the battle. If she wears a ',
          },
          { type: 'status', content: 'human mask' },
          { type: 'text', content: ', she absorbs ' },
          { type: 'value', content: '5%' },
          { type: 'text', content: ' of the Attack and ' },
          { type: 'value', content: '50' },
          {
            type: 'text',
            content:
              " Energy from all allies but increases all allies' Defense by ",
          },
          { type: 'value', content: '25%' },
          { type: 'text', content: '. If she wears the ' },
          { type: 'status', content: 'demon mask' },
          { type: 'text', content: ', it absorbs ' },
          { type: 'value', content: '7%' },
          { type: 'text', content: " of allies' Attack and takes " },
          { type: 'value', content: '75' },
          { type: 'text', content: ' Energy from each' },
        ],
        lv2: 'With the demon mask, release the same skill 15s after the start of the battle',
        lv3: 'With the human mask, absorbs 8% of the Attack from all allies but increases Defense by 30%',
        lv4: 'With the human mask, absorbs 60 Energy from all allies; with the demon mask, 90 Energy from all allies',
      },
    },
    skill4: {
      type: 'Passive',
      name: 'Dual Masks',
      description: {
        lv1: [
          { type: 'text', content: 'When Lilith wears the ' },
          { type: 'status', content: 'human mask' },
          { type: 'text', content: ', her Crit Chance increases by ' },
          { type: 'value', content: '30%' },
          { type: 'text', content: '; when she wears a ' },
          { type: 'status', content: 'demon mask' },
          { type: 'text', content: ', her Lifesteal increases by ' },
          { type: 'value', content: '30%' },
          { type: 'text', content: '.' },
        ],
        lv2: '',
        lv3: '',
        lv4: '',
      },
    },
  },
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ----------------------------------------------- SSR -----------------------------------------------
  // ------------------------------------- LUMINARCH -------------------------------------
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- SHADOWARCH -------------------------------------
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- GUARDIAN -------------------------------------
  // ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // ------------------------------------- VERDIAN -------------------------------------
};

export default skillData;

const dummyData = {
  heroName: {
    skill1: {
      type: '',
      name: '',
      description: {
        lv1: [
          { type: 'text', content: '' },
          { type: 'text', content: '' },
        ],
        lv2: '',
        lv3: '',
        lv4: '',
      },
    },
    skill2: {
      type: '',
      name: '',
      description: {
        lv1: [
          { type: 'text', content: '' },
          { type: 'text', content: '' },
        ],
        lv2: '',
        lv3: '',
        lv4: '',
      },
    },
    skill3: {
      type: '',
      name: '',
      description: {
        lv1: [
          { type: 'text', content: '' },
          { type: 'text', content: '' },
        ],
        lv2: '',
        lv3: '',
        lv4: '',
      },
    },
    skill4: {
      type: '',
      name: '',
      description: {
        lv1: [
          { type: 'text', content: '' },
          { type: 'text', content: '' },
        ],
        lv2: '',
        lv3: '',
        lv4: '',
      },
    },
  },
};
