const heroDivinityData = {
  // -------------------------------- UR --------------------------------
  Lucifer: {
    branches: ['Primeval', 'Asterial', 'Devoid'],
    branchLeft: ['Culmination', 'Corrosion', 'Colossus'],
    branchMiddle: ['Aurora', 'Full Moon', 'New Moon'],
    branchRight: ['Vexation', 'Engulf', 'Spirit Flash'],
  },
  Iset: {
    branches: ['Primeval', 'Devoid', 'Psyche'],
    branchLeft: ['Inspiration', 'Primal Totem', 'Death Waiver'],
    branchMiddle: ['Vexation', 'Time-lapse', 'Excitement'],
    branchRight: ['Self-Hypnosis', 'Divine-Fire', 'Collective Fervor'],
  },
  Typhon: {
    branches: ['Primeval', 'Asterial', 'Devoid'],
    branchLeft: ['Inspiration', 'Primal Totem', 'Colossus'],
    branchMiddle: ['Aurora', 'Black Hole', 'Night'],
    branchRight: ['Vexation', 'Engulf', 'Excitement'],
  },
  Lilith: {
    branches: ['Devoid', 'Psyche', 'Primeval'],
    branchLeft: ['Animus', 'Time-lapse', 'Spirit Flash'],
    branchMiddle: ['Sprout', 'Prevail', 'Deftness'],
    branchRight: ['Culmination', 'Corrosion', 'Death Waiver'],
  },
  Nuwa: {
    branches: ['Asterial', 'Immortality', 'Psyche'],
    branchLeft: ['Aurora', 'Full Moon', 'Supernova'],
    branchMiddle: ['Transcend', 'Sunder', 'Wrath'],
    branchRight: ['Self-Hypnosis', 'Maestro', 'Panacea'],
  },
  // -------------------------------- SSR --------------------------------
  // -------------------------------- Luminarch --------------------------------
  Zeus: {
    branches: ['Psyche', 'Asterial', 'Primeval'],
    branchLeft: ['Torment', 'Divine-Fire', 'Deftness'],
    branchMiddle: ['Meteor Shower', 'Annihilation', 'Spotlight'],
    branchRight: ['Inspiration', 'Corrosion', 'Death Waiver'],
  },
  Athena: {
    branches: ['Asterial', 'Immortality', 'Primeval'],
    branchLeft: ['Meteor Shower', 'Full Moon', 'New Moon'],
    branchMiddle: ['Tenacious', 'Resonance', 'Recovery'],
    branchRight: ['Inspiration', 'Purify', 'Pristine'],
  },
  Susanoo: {
    branches: ['Immortality', 'Devoid', 'Primeval'],
    branchLeft: ['Transcend', 'Sunder', 'Savvy'],
    branchMiddle: ['Animus', 'Broken Mirror', 'Spirit Flash'],
    branchRight: ['Culmination', 'Corrosion', 'Death Waiver'],
  },
  Artemis: {
    branches: ['Immortality', 'Asterial', 'Primeval'],
    branchLeft: ['Transcend', 'Sunder', 'Savvy'],
    branchMiddle: ['Aurora', 'Annihilation', 'Spotlight'],
    branchRight: ['Culmination', 'Primal Totem', 'Death Waiver'],
  },
  Dionysus: {
    branches: ['Asterial', 'Psyche', 'Primeval'],
    branchLeft: ['Gemini', 'Black Hole', 'New Moon'],
    branchMiddle: ['Torment', 'Maestro', 'Panacea'],
    branchRight: ['Embroilment', 'Corrosion', 'Pristine'],
  },
  Thor: {
    branches: ['Devoid', 'Asterial', 'Primeval'],
    branchLeft: ['Phantom', 'Broken Mirror', 'Spirit Flash'],
    branchMiddle: ['Meteor Shower', 'Black Hole', 'Supernova'],
    branchRight: ['Embroilment', 'Corrosion', 'Colossus'],
  },
  // -------------------------------- Shadowarch --------------------------------
  Persephone: {
    branches: ['Psyche', 'Devoid', 'Primeval'],
    branchLeft: ['Torment', 'Prevail', 'Collective Fervor'],
    branchMiddle: ['Vexation', 'Engulf', 'Excitement'],
    branchRight: ['Embroilment', 'Primal Totem', 'Colossus'],
  },
  Izanami: {
    branches: ['Immortality', 'Devoid', 'Psyche'],
    branchLeft: ['Symbiosis', 'Waterdrop', 'Savvy'],
    branchMiddle: ['Phantom', 'Engulf', 'Energy Field'],
    branchRight: ['Torment', 'Divine-Fire', 'Collective Fervor'],
  },
  Hades: {
    branches: ['Devoid', 'Immortality', 'Primeval'],
    branchLeft: ['Phantom', 'Time-lapse', 'Energy Field'],
    branchMiddle: ['Tenacious', 'Waterdrop', 'Recovery'],
    branchRight: ['Embroilment', 'Primal Totem', 'Pristine'],
  },
  Medusa: {
    branches: ['Psyche', 'Immortality', 'Devoid'],
    branchLeft: ['Torment', 'Prevail', 'Deftness'],
    branchMiddle: ['Transcend', 'Sunder', 'Wrath'],
    branchRight: ['Vexation', 'Time-lapse', 'Spirit Flash'],
  },
  Anubis: {
    branches: ['Immortality', 'Devoid', 'Asterial'],
    branchLeft: ['Symbiosis', 'Resonance', 'Recovery'],
    branchMiddle: ['Phantom', 'Broken Mirror', 'Energy Field'],
    branchRight: ['Gemini', 'Black Hole', 'New Moon'],
  },
  Hela: {
    branches: ['Psyche', 'Devoid', 'Primeval'],
    branchLeft: ['Torment', 'Prevail', 'Collective Fervor'],
    branchMiddle: ['Vexation', 'Engulf', 'Excitement'],
    branchRight: ['Embroilment', 'Primal Totem', 'Colossus'],
  },
  // -------------------------------- Guardian --------------------------------
  Hercules: {
    branches: ['Devoid', 'Psyche', 'Primeval'],
    branchLeft: ['Animus', 'Broken Mirror', 'Energy Field'],
    branchMiddle: ['Sprout', 'Maestro', 'Panacea'],
    branchRight: ['Embroilment', 'Primal Totem', 'Colossus'],
  },
  'Lu Bu': {
    branches: ['Immortality', 'Primeval', 'Devoid'],
    branchLeft: ['Symbiosis', 'Sunder', 'Wrath'],
    branchMiddle: ['Culmination', 'Primal Totem', 'Death Waiver'],
    branchRight: ['Phantom', 'Engulf', 'Energy Field'],
  },
  'Ganjiang & Moye': {
    branches: ['Psyche', 'Primeval', 'Asterial'],
    branchLeft: ['Sprout', 'Divine-Fire', 'Deftness'],
    branchMiddle: ['Embroilment', 'Corrosion', 'Death Waiver'],
    branchRight: ['Gemini', 'Annihilation', 'Supernova'],
  },
  'Joan of Arc': {
    branches: ['Immortality', 'Psyche', 'Asterial'],
    branchLeft: ['Symbiosis', 'Waterdrop', 'Recovery'],
    branchMiddle: ['Sprout', 'Divine-Fire', 'Collective Fervor'],
    branchRight: ['Aurora', 'Full Moon', 'New Moon'],
  },
  Cleopatra: {
    branches: ['Psyche', 'Devoid', 'Asterial'],
    branchLeft: ['Torment', 'Prevail', 'Panacea'],
    branchMiddle: ['Animus', 'Time-lapse', 'Excitement'],
    branchRight: ['Meteor Shower', 'Annihilation', 'Supernova'],
  },
  Cassandra: {
    branches: ['Devoid', 'Primeval', 'Asterial'],
    branchLeft: ['Animus', 'Engulf', 'Excitement'],
    branchMiddle: ['Inspiration', 'Purify', 'Pristine'],
    branchRight: ['Meteor Shower', 'Full Moon', 'New Moon'],
  },
  // -------------------------------- Verdian --------------------------------
  Nagakanya: {
    branches: ['Psyche', 'Immortality', 'Asterial'],
    branchLeft: ['Self-Hypnosis', 'Maestro', 'Collective Fervor'],
    branchMiddle: ['Symbiosis', 'Waterdrop', 'Wrath'],
    branchRight: ['Meteor Shower', 'Black Hole', 'New Moon'],
  },
  'Tamamo no Mae': {
    branches: ['Immortality', 'Asterial', 'Devoid'],
    branchLeft: ['Symbiosis', 'Sunder', 'Savvy'],
    branchMiddle: ['Aurora', 'Annihilation', 'Supernova'],
    branchRight: ['Animus', 'Time-lapse', 'Spirit Flash'],
  },
  Idun: {
    branches: ['Psyche', 'Asterial', 'Devoid'],
    branchLeft: ['Self-Hypnosis', 'Prevail', 'Panacea'],
    branchMiddle: ['Gemini', 'Full Moon', 'New Moon'],
    branchRight: ['Vexation', 'Time-lapse', 'Energy Field'],
  },
  Gaia: {
    branches: ['Devoid', 'Immortality', 'Asterial'],
    branchLeft: ['Vexation', 'Broken Mirror', 'Excitement'],
    branchMiddle: ['Tenacious', 'Resonance', 'Recovery'],
    branchRight: ['Gemini', 'Annihilation', 'Supernova'],
  },
  Oberon: {
    branches: ['Immortality', 'Asterial', 'Psyche'],
    branchLeft: ['Transcend', 'Resonance', 'Savvy'],
    branchMiddle: ['Gemini', 'Full Moon', 'Spotlight'],
    branchRight: ['Sprout', 'Prevail', 'Deftness'],
  },
  Flora: {
    branches: ['Devoid', 'Psyche', 'Asterial'],
    branchLeft: ['Vexation', 'Engulf', 'Spirit Flash'],
    branchMiddle: ['Torment', 'Maestro', 'Collective Fervor'],
    branchRight: ['Aurora', 'Black Hole', 'Spotlight'],
  },
};

export default heroDivinityData;
