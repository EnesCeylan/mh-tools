import heroData from '../../../data/heroData';
import HeroDropdownItem from './HeroDropdownItem';

function HeroDropdown({
  dropDown,
  setDropDown,
  selectedHero,
  setSelectedHero,
  setRuneDropdown,
  setArtifactDropdown,
}) {
  const heroes = Object.keys(heroData);
  return (
    <div
      className={dropDown ? 'dropdown active' : 'dropdown'}
      onClick={(e) => {
        e.stopPropagation();
        setDropDown(!dropDown);
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
        {heroes.map((hero, index) => {
          return (
            <HeroDropdownItem
              heroName={hero}
              key={index}
              setSelectedHero={setSelectedHero}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HeroDropdown;
