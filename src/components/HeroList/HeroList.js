import { useState } from 'react';

import heroData from '../../data/heroData';
import './HeroList.css';

function HeroList() {
  const [selectedFaction, setSelectedFaction] = useState('');
  const [selectedRarity, setSelectedRarity] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const heroes = Object.keys(heroData);

  const handleFactionFilter = (faction) => {
    if (selectedFaction !== faction) {
      setSelectedFaction(faction);
    } else {
      setSelectedFaction('');
    }
  };

  const handleRarityFilter = (rarity) => {
    if (selectedRarity !== rarity) {
      setSelectedRarity(rarity);
    } else {
      setSelectedRarity('');
    }
  };

  const handleRoleFilter = (role) => {
    if (selectedRole !== role) {
      setSelectedRole(role);
    } else {
      setSelectedRole('');
    }
  };

  return (
    <div className='hero-list-container'>
      <div className='filters-container'>
        <div className='rarity-filters'>
          <button className='filter' onClick={() => handleRarityFilter('UR')}>
            UR
          </button>
          <button className='filter' onClick={() => handleRarityFilter('SSR')}>
            SSR
          </button>
        </div>
        <div className='role-filters'>
          <button className='filter' onClick={() => handleRoleFilter('Mage')}>
            M
          </button>
          <button
            className='filter'
            onClick={() => handleRoleFilter('Fighter')}
          >
            F
          </button>
          <button className='filter' onClick={() => handleRoleFilter('Tank')}>
            T
          </button>
          <button
            className='filter'
            onClick={() => handleRoleFilter('Support')}
          >
            S
          </button>
        </div>
        <div className='faction-filters'>
          <button
            className='filter'
            onClick={() => handleFactionFilter('Luminarch')}
          >
            L
          </button>
          <button
            className='filter'
            onClick={() => handleFactionFilter('Shadowarch')}
          >
            S
          </button>
          <button
            className='filter'
            onClick={() => handleFactionFilter('Guardian')}
          >
            G
          </button>
          <button
            className='filter'
            onClick={() => handleFactionFilter('Verdian')}
          >
            V
          </button>
        </div>
      </div>
      <div className='hero-list'>
        {heroes.map((hero, index) => {
          if (!selectedRarity || heroData[hero].rarity === selectedRarity) {
            if (
              !selectedFaction ||
              heroData[hero].faction.includes(selectedFaction)
            ) {
              if (!selectedRole || heroData[hero].role === selectedRole) {
                return (
                  <div className='hero-container' key={index}>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '/assets/hero/hero-cards/' +
                        hero.replace(/ /g, '_') +
                        '.png'
                      }
                      alt={hero}
                    />
                    <span className='hero-name'>{hero}</span>
                  </div>
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
