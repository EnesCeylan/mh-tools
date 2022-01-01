import { useState } from 'react';
import { Link } from 'react-router-dom';

import heroData from '../../data/heroData';
import './HeroList.css';
import HeroListFilter from './HeroListFilter';

function HeroList({ setShowMenu }) {
  const [selectedFaction, setSelectedFaction] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('');
  const [selectedRole, setSelectedRole] = useState('');

  const heroes = Object.keys(heroData);

  return (
    <div className='hero-list-container' onClick={() => setShowMenu(false)}>
      <HeroListFilter
        setSelectedFaction={setSelectedFaction}
        selectedFaction={selectedFaction}
        setSelectedRarity={setSelectedRarity}
        selectedRarity={selectedRarity}
        setSelectedRole={setSelectedRole}
        selectedRole={selectedRole}
      />
      <div className='hero-list'>
        {heroes.map((hero, index) => {
          if (!selectedRarity || heroData[hero].rarity === selectedRarity) {
            if (
              !selectedFaction ||
              heroData[hero].faction.includes(selectedFaction)
            ) {
              if (!selectedRole || heroData[hero].role === selectedRole) {
                return (
                  <Link
                    className='hero-link'
                    to={'/hero-list/' + hero.replace(/ /g, '-')}
                    key={index}
                  >
                    <div
                      className={
                        'img-shadow-container ' + heroData[hero].rarity
                      }
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/assets/hero/hero-cards/' +
                          hero.replace(/ /g, '_') +
                          '.png'
                        }
                        alt={hero}
                      />
                    </div>
                    <span className='hero-name'>{hero}</span>
                  </Link>
                );
              }
            }
          }
        })}
      </div>
    </div>
  );
}

export default HeroList;

// use .replace(/ /g,"_") to replace spaces with underscores.
