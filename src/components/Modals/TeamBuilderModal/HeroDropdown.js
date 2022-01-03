import { useState } from 'react';
import heroData from '../../../data/heroData';
import HeroDropdownItem from './HeroDropdownItem';

function HeroDropdown({ dropDown, setDropDown }) {
  const [selectedHero, setselectedHero] = useState('');

  const heroes = Object.keys(heroData);
  return (
    <div
      className={dropDown ? 'dropdown active' : 'dropdown'}
      onClick={(e) => {
        e.stopPropagation();
        setDropDown(!dropDown);
      }}
    >
      <div className='dropdown-select'>
        <span className='select'>Choose hero</span>
        <i className='fa fa-caret-down icon'></i>
      </div>
      <div className='dropdown-list'>
        {heroes.map((hero, index) => {
          return <HeroDropdownItem heroName={hero} key={index} />;
        })}
      </div>
      {/* <div className='dropdown-list'>
        <div className='dropdown-list-item'>
          <img
            src={
              process.env.PUBLIC_URL +
              '/assets/factions/Luminarch-Shadowarch.png'
            }
            alt='Luminarch - Shadowarch faction'
          />
          <p>Lucifer</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={
              process.env.PUBLIC_URL + '/assets/factions/Luminarch-Verdian.png'
            }
            alt='Luminarch - Verdian faction'
          />
          <p>Iset</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={
              process.env.PUBLIC_URL + '/assets/factions/Guardian-Verdian.png'
            }
            alt='Guardian - Verdian faction'
          />
          <p>Typhon</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={
              process.env.PUBLIC_URL +
              '/assets/factions/Shadowarch-Guardian.png'
            }
            alt='Shadowarch - Guardian faction'
          />
          <p>Lilith</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={
              process.env.PUBLIC_URL + '/assets/factions/Guardian-Verdian.png'
            }
            alt='Guardian - Verdian faction'
          />
          <p>Nuwa</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Luminarch.png'}
            alt='Luminarch faction'
          />
          <p>Zeus</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Luminarch.png'}
            alt='Luminarch faction'
          />
          <p>Athena</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Luminarch.png'}
            alt='Luminarch faction'
          />
          <p>Susanoo</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Luminarch.png'}
            alt='Luminarch faction'
          />
          <p>Artemis</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Luminarch.png'}
            alt='Luminarch faction'
          />
          <p>Dionysus</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Luminarch.png'}
            alt='Luminarch faction'
          />
          <p>Thor</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Shadowarch.png'}
            alt='Shadowarch faction'
          />
          <p>Persephone</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Shadowarch.png'}
            alt='Shadowarch faction'
          />
          <p>Izanami</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Shadowarch.png'}
            alt='Shadowarch faction'
          />
          <p>Hades</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Shadowarch.png'}
            alt='Shadowarch faction'
          />
          <p>Medusa</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Shadowarch.png'}
            alt='Shadowarch faction'
          />
          <p>Anubis</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Shadowarch.png'}
            alt='Shadowarch faction'
          />
          <p>Hela</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Guardian.png'}
            alt='Guardian faction'
          />
          <p>Hercules</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Guardian.png'}
            alt='Guardian faction'
          />
          <p>Lu Bu</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Guardian.png'}
            alt='Guardian faction'
          />
          <p>Ganjiang &amp; Moye</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Guardian.png'}
            alt='Guardian faction'
          />
          <p>Joan of Arc</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Guardian.png'}
            alt='Guardian faction'
          />
          <p>Cleopatra</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Guardian.png'}
            alt='Guardian faction'
          />
          <p>Cassandra</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Verdian.png'}
            alt='Verdian faction'
          />
          <p>Nagakanya</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Verdian.png'}
            alt='Verdian faction'
          />
          <p>Tamamo no Mae</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Verdian.png'}
            alt='Verdian faction'
          />
          <p>Idun</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Verdian.png'}
            alt='Verdian faction'
          />
          <p>Gaia</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Verdian.png'}
            alt='Verdian faction'
          />
          <p>Oberon</p>
        </div>
        <div className='dropdown-list-item'>
          <img
            src={process.env.PUBLIC_URL + '/assets/factions/Verdian.png'}
            alt='Verdian faction'
          />
          <p>Flora</p>
        </div>
      </div> */}
    </div>
  );
}

export default HeroDropdown;
