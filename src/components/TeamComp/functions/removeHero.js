export const removeHero = (teamData, setTeamData, index) => {
  const copy = JSON.parse(JSON.stringify(teamData));

  copy.team[index].name = '';
  copy.team[index].rune = '';
  copy.team[index].artifact = '';
  copy.team[index].divinityNodes = ['', '', ''];
  copy.team[index].weaponLv = '';

  setTeamData(copy);
};

export default removeHero;
