import heroData from '../../../data/heroData';
import HeroDropdownItem from './HeroDropdownItem';

function HeroDropdown({
  dropdown,
  setDropdown,
  selectedHero,
  setSelectedHero,
  setRuneDropdown,
  setArtifactDropdown,
  teamData,
  setSelectedNodes,
}) {
  const heroes = Object.keys(heroData);

  let addedHeroes = [];

  teamData.forEach((hero) => {
    if (hero !== '') {
      addedHeroes.push(hero.name);
    }
  });

  return (
    <div
      className={dropdown ? 'dropdown hero active' : 'dropdown hero'}
      onClick={(e) => {
        e.stopPropagation();
        setDropdown(!dropdown);
        setRuneDropdown(false);
        setArtifactDropdown(false);
      }}
    >
      <div className='dropdown-select'>
        <div className='group-container'>
          {selectedHero && (
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/factions/' +
                (heroData[selectedHero].faction.length > 1
                  ? heroData[selectedHero].faction[0] +
                    '-' +
                    heroData[selectedHero].faction[1]
                  : heroData[selectedHero].faction[0]) +
                '.png'
              }
              alt={selectedHero}
            />
          )}
          <span className='select'>
            {selectedHero ? selectedHero : 'Choose hero'}
          </span>
        </div>
        <i className='fa fa-caret-down icon'></i>
      </div>
      <div className='dropdown-list'>
        {heroes
          .filter((hero) => !addedHeroes.includes(hero))
          .map((hero, index) => {
            return (
              <HeroDropdownItem
                heroName={hero}
                key={index}
                setSelectedHero={setSelectedHero}
                setSelectedNodes={setSelectedNodes}
              />
            );
          })}
      </div>
    </div>
  );
}

export default HeroDropdown;
