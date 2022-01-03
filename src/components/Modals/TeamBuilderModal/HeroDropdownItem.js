import heroData from '../../../data/heroData';

function HeroDropdownItem({ heroName }) {
  return (
    <div className='dropdown-list-item'>
      <img
        src={
          process.env.PUBLIC_URL +
          '/assets/factions/' +
          (heroData[heroName].faction.length > 1
            ? heroData[heroName].faction[0] +
              '-' +
              heroData[heroName].faction[1]
            : heroData[heroName].faction[0]) +
          '.png'
        }
        alt={
          (heroData[heroName].faction.length > 1
            ? heroData[heroName].faction[0] +
              ' - ' +
              heroData[heroName].faction[1]
            : heroData[heroName].faction[0]) + ' faction'
        }
      />
      <p>{heroName}</p>
    </div>
  );
}

export default HeroDropdownItem;
