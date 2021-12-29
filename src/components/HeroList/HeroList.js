import heroData from '../../data/heroData';
import './HeroList.css';

function HeroList() {
  const heroes = Object.keys(heroData);

  return (
    <div className='hero-list'>
      {heroes.map((hero, index) => {
        return console.log(Object.entries(heroData[hero]));
      })}
    </div>
  );
}

export default HeroList;
