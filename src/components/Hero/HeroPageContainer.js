
import './HeroPage.css';
import { useState } from 'react';
import IWPage from './IW/IW';
import HeroGuide from './Guide/HeroGuide';
import SkillsContainer from './Skills/SkillsContainer';
import Skill from './Skills/Skill';

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
        {currentType === 'IW' && <IWPage />}
        {currentType === 'Guide' && <HeroGuide />}
      </div>
    </div>
  );
}

export default HeroPageContainer;
