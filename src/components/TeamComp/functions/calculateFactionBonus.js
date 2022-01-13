import heroData from '../../../data/heroData';

export const calculateFactionBonus = (
  teamData,
  setFactionShadowarch,
  setFactionLuminarch,
  setFactionGuardian,
  setFactionVerdian,
  setFactionBonus
) => {
  let shadowarch = 0;
  let luminarch = 0;
  let guardian = 0;
  let verdian = 0;

  const bonuses = {
    majorityVigor: [
      'increases 4% ATK and DEF',
      'increases 8% ATK and DEF',
      'increases 12% ATK and DEF',
      'increases 16% ATK and DEF',
    ],
    minorityVigor: [
      'increases 8% Final Damage',
      'increases 12% Final Damage',
      'increases 16% Final Damage',
      'increases 20% Final Damage',
    ],
  };

  teamData.team.forEach((hero) => {
    if (hero.name !== '') {
      if (heroData[hero.name].faction.includes('Shadowarch')) shadowarch++;
      if (heroData[hero.name].faction.includes('Luminarch')) luminarch++;
      if (heroData[hero.name].faction.includes('Guardian')) guardian++;
      if (heroData[hero.name].faction.includes('Verdian')) verdian++;
    }
  });

  if (shadowarch !== 0 || luminarch !== 0 || guardian !== 0 || verdian !== 0) {
    setFactionShadowarch(shadowarch);
    setFactionLuminarch(luminarch);
    setFactionGuardian(guardian);
    setFactionVerdian(verdian);

    const bonusArr = [shadowarch, luminarch, guardian, verdian].sort((a, b) => b - a);
    setFactionBonus({
      majorityVigor: bonuses.majorityVigor[bonusArr[0] - 1 === 4 ? 3 : bonusArr[0] - 1],
      minorityVigor: bonuses.minorityVigor[bonusArr[1] - 1],
    });
  }
};

export default calculateFactionBonus;
