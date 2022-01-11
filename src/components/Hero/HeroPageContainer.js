
import './HeroPage.css';
import { useState } from 'react';
import IWContainer from './IW/IWContainer';
import HeroGuide from './Guide/HeroGuide';
import SkillsContainer from './Skills/SkillsContainer';

function HeroPageContainer({ heroName }) {
  const pageType = ['Skill', 'IW', 'Guide']
  const [currentType, setCurrentType] = useState('Skill')

  return (
    <div className="hero-page-container">
      {pageType.map((type) => (
        <div className="heropage-type-button-container" key={type}>
          <button
            className="heropage-type-button"
            onClick={() => setCurrentType(type)}
          >
            {type}
          </button>
        </div>
      ))}
      <div className="type-container">
        {currentType === 'Skill' && <SkillsContainer heroName={heroName} />}
        {currentType === 'IW' && <IWContainer heroName={heroName} />}
        {currentType === 'Guide' && <HeroGuide hero={heroName.replace(/-/g, ' ')} />}
      </div>
    </div>
  );
}

export default HeroPageContainer;
