import './HeroPage.css';
import { useState } from 'react';
import IWContainer from './IW/IWContainer';
import HeroGuide from './Guide/HeroGuide';
import SkillsContainer from './Skills/SkillsContainer';

function HeroInfoContainer({ heroName }) {
  const pageType = ['Skill', 'IW', 'Guide'];
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
        {currentType === 'IW' && <IWContainer hero={heroName.replace(/-/g, ' ')} />}
        {currentType === 'Guide' && <HeroGuide hero={heroName.replace(/-/g, ' ')} />}
      </div>
    </div>
  );
}

export default HeroInfoContainer;
