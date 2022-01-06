const heroData = {
  // ----------------------------------- UR -----------------------------------

  Lucifer: {
    rarity: 'UR',
    faction: ['Luminarch', 'Shadowarch'],
    role: 'Fighter',
    runes: ['Air'],
    artifacts: ['Yasakani Magatama'],
    divinityNotables: ['New Moon', 'Full Moon', 'Aurora'],
  },

  Iset: {
    rarity: 'UR',
    faction: ['Luminarch', 'Verdian'],
    role: 'Support',
    runes: ['Dark', 'Forest', 'Air'],
    artifacts: ['Excalibur'],
    divinityNotables: ['Inspiration', 'Death Waiver', 'Excitement', 'Collective Fervor'],
  },
  Typhon: {
    rarity: 'UR',
    faction: ['Guardian', 'Verdian'],
    role: 'Tank',
    runes: ['Earth', 'Wind'],
    artifacts: ['Shield'],
    divinityNotables: ['Night', 'Excitement'],
  },
  Lilith: {
    rarity: 'UR',
    faction: ['Shadowarch', 'Guardian'],
    role: 'Mage',
    runes: ['Thunder', 'Fire'],
    artifacts: ['Sudarshana Chakra'],
    divinityNotables: ['Culmination', 'Death Waiver'],
  },
  Nuwa: {
    rarity: 'UR',
    faction: ['Guardian', 'Verdian'],
    role: 'Support',
    runes: ['Air', 'Forest'],
    artifacts: ['Yasakani Magatama'],
    divinityNotables: ['Aurora', 'Full Moon', 'Transcend', 'Panacea'],
  },
  // ----------------------------------- SSR -----------------------------------
  // ------------------------- Luminarch -------------------------
  Zeus: {
    rarity: 'SSR',
    faction: ['Luminarch'],
    role: 'Mage',
    runes: ['Air', 'Thunder', 'Fire'],
    artifacts: ['Yasakani Magatama', 'Sudarshana Chakra', 'Staff of Sharur'],
    divinityNotables: ['Death Waiver', 'Spotlight'],
  },
  Athena: {
    rarity: 'SSR',
    faction: ['Luminarch'],
    role: 'Tank',
    runes: ['Air', 'Water', 'Earth'],
    artifacts: ['Yasakani Magatama', 'Aegist Shield', 'Excalibur'],
    divinityNotables: ['Full Moon', 'New Moon', 'Recovery'],
  },
  Susanoo: {
    rarity: 'SSR',
    faction: ['Luminarch'],
    role: 'Fighter',
    runes: ['Water', 'Air', 'Fire'],
    artifacts: ['Staff of Sharur', 'Sudarshana Chakra'],
    divinityNotables: ['Death Waiver', 'Savvy', 'Transcend', 'Corrosion'],
  },
  Artemis: {
    rarity: 'SSR',
    faction: ['Luminarch'],
    role: 'Fighter',
    runes: ['Fire', 'Air', 'Thunder'],
    artifacts: ['Yasakani Magatama', 'Staff of Sharur', 'Axe of Pangu'],
    divinityNotables: ['Spotlight', 'Aurora', 'Transcend', 'Death Waiver'],
  },
  Dionysus: {
    rarity: 'SSR',
    faction: ['Luminarch'],
    role: 'Support',
    runes: ['Forest', 'Air', 'Dark'],
    artifacts: ['Yasakani Magatama'],
    divinityNotables: ['New Moon'],
  },
  Thor: {
    rarity: 'SSR',
    faction: ['Luminarch'],
    role: 'Tank',
    runes: ['Air', 'Earth'],
    artifacts: ['Yasakani Magatama', 'Aegis Shield'],
    divinityNotables: ['Phantom', 'Embroilment'],
  },
  // ------------------------- Shadowarch -------------------------
  Persephone: {
    rarity: 'SSR',
    faction: ['Shadowarch'],
    role: 'Mage',
    runes: ['Dark', 'Forest', 'Air'],
    artifacts: ['Yasakani Magatama', 'Staff of Sharur'],
    divinityNotables: ['Excitement', 'Collective Fervor'],
  },
  Izanami: {
    rarity: 'SSR',
    faction: ['Shadowarch'],
    role: 'Mage',
    runes: ['Air', 'Dark', 'Fire'],
    artifacts: ['Yasakani Magatama', 'Sudarshana Chakra'],
    divinityNotables: ['Savvy', 'Waterdrop', 'Engulf', 'Phantom'],
  },
  Hades: {
    rarity: 'SSR',
    faction: ['Shadowarch'],
    role: 'Tank',
    runes: ['Water', 'Earth'],
    artifacts: ['Aegis Shield', 'Yasakani Magatama'],
    divinityNotables: ['Recovery', 'Waterdrop', 'Tenacious', 'Phantom'],
  },
  Medusa: {
    rarity: 'SSR',
    faction: ['Shadowarch'],
    role: 'Fighter',
    runes: ['Air', 'Fire', 'Thunder'],
    artifacts: ['Axe of Pangu', 'Yasakani Magatama'],
    divinityNotables: ['Wrath', 'Prevail', 'Transcend'],
  },
  Anubis: {
    rarity: 'SSR',
    faction: ['Shadowarch'],
    role: 'Tank',
    runes: ['Air', 'Earth'],
    artifacts: ['Aegis Shield', 'Scarab Badge', 'Yasakani Magatama'],
    divinityNotables: ['New Moon', 'Phantom', 'Recovery', 'Resonance'],
  },
  Hela: {
    rarity: 'SSR',
    faction: ['Shadowarch'],
    role: 'Support',
    runes: ['Air', 'Fire', 'Water'],
    artifacts: ['Yasakani Magatama'],
    divinityNotables: ['Engulf', 'Prevail'],
  },
  // ------------------------- Guardian -------------------------
  Hercules: {
    rarity: 'SSR',
    faction: ['Guardian'],
    role: 'Tank',
    runes: ['Earth', 'Air'],
    artifacts: ['Aegis Shield', 'Excalibur', 'Yasakani Magatama'],
    divinityNotables: ['Panacea', 'Embroilment'],
  },
  'Lu Bu': {
    rarity: 'SSR',
    faction: ['Guardian'],
    role: 'Fighter',
    runes: ['Thunder', 'Fire', 'Air'],
    artifacts: ['Staff of Sharur', 'Yasakani Magatama'],
    divinityNotables: ['Death Waiver', 'Engulf', 'Wrath', 'Phantom'],
  },
  'Ganjiang & Moye': {
    rarity: 'SSR',
    faction: ['Guardian'],
    role: 'Mage',
    runes: ['Thunder'],
    artifacts: ['Axe'],
    divinityNotables: ['Death Waiver', 'Supernova'],
  },
  'Joan of Arc': {
    rarity: 'SSR',
    faction: ['Guardian'],
    role: 'Support',
    runes: ['Air', 'Water', 'Forest'],
    artifacts: ['Yasakani Magatama'],
    divinityNotables: ['Full Moon', 'New Moon', 'Aurora'],
  },
  Cleopatra: {
    rarity: 'SSR',
    faction: ['Guardian'],
    role: 'Mage',
    runes: ['Air', 'Fire'],
    artifacts: ['Yasakani Magatama', 'Staff of Sharur'],
    divinityNotables: ['Torment', 'Prevail', 'Supernova'],
  },
  Cassandra: {
    rarity: 'SSR',
    faction: ['Guardian'],
    role: 'Support',
    runes: ['Water'],
    artifacts: ['Excalibur'],
    divinityNotables: ['Full Moon', 'New Moon', 'Purify', 'Inspiration'],
  },
  // ------------------------- Verdian -------------------------
  Nagakanya: {
    rarity: 'SSR',
    faction: ['Verdian'],
    role: 'Support',
    runes: ['Air', 'Water'],
    artifacts: ['Yasakani Magatama', 'Excalibur'],
    divinityNotables: ['New Moon', 'Waterdrop', 'Self-Hypnosis'],
  },
  'Tamamo no Mae': {
    rarity: 'SSR',
    faction: ['Verdian'],
    role: 'Mage',
    runes: ['Lightning', 'Fire', 'Air'],
    artifacts: ['Sudarshana Chakra', 'Yasakani Magatama'],
    divinityNotables: ['Savvy', 'Supernova', 'Aurora'],
  },
  Idun: {
    rarity: 'SSR',
    faction: ['Verdian'],
    role: 'Support',
    runes: ['Air', 'Water'],
    artifacts: ['Yasakani Magatama', 'Excalibur'],
    divinityNotables: ['New Moon', 'Full Moon'],
  },
  Gaia: {
    rarity: 'SSR',
    faction: ['Verdian'],
    role: 'Tank',
    runes: ['Light', 'Earth'],
    artifacts: ['Aegis Shield', 'Excalibur'],
    divinityNotables: ['Resonance', 'Recovery'],
  },
  Oberon: {
    rarity: 'SSR',
    faction: ['Verdian'],
    role: 'Fighter',
    runes: ['Air'],
    artifacts: ['Yasakani Magatama'],
    divinityNotables: ['Spotlight', 'Transcend', 'Full Moon', 'Prevail'],
  },
  Flora: {
    rarity: 'SSR',
    faction: ['Verdian'],
    role: 'Mage',
    runes: ['Fire', 'Forest'],
    artifacts: ['Yasakani Magatama', 'Sudarshana Chakra'],
    divinityNotables: ['Spotlight', 'Maestro', 'Aurora', 'Torment'],
  },
};

export default heroData;

// const dummyHeroData = {}
//   heroName: {
//     rarity: 'SSR',
//     faction: [''],
//     role: '',
//     runes: ['Air', 'Dark', 'Fire'],
//     artifacts: ['Yasakani Magatama', 'Staff of Sharur', 'Axe of Pangu'],
//     divinityNotables: ''
//   },
// };