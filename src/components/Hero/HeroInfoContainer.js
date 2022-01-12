import React, { lazy, useState } from 'react';

import './HeroPage.css';

import SkillsContainer from './Skills/SkillsContainer';

const HeroGuide = React.lazy(() => import('./Guide/HeroGuide'));
const IWContainer = React.lazy(() => import('./IW/IWContainer'));

function HeroInfoContainer({ heroName }) {
  const pageType = ['Skill', 'Weapon', 'Guide'];
  const [currentType, setCurrentType] = useState('Skill');

  return (
    <div className='hero-info-container'>
      <div className='heropage-type-button-container'>
        {pageType.map((type) => (
          <button className='heropage-type-button' onClick={() => setCurrentType(type)} key={type}>
            {type}
          </button>
        ))}
      </div>
      <div className='type-container'>
        {currentType === 'Skill' && <SkillsContainer heroName={heroName} />}
        {currentType === 'Weapon' && <IWContainer hero={heroName.replace(/-/g, ' ')} />}
        {currentType === 'Guide' && <HeroGuide hero={heroName.replace(/-/g, ' ')} />}
      </div>
    </div>
  );
}

export default HeroInfoContainer;
