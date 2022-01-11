import IWDescription from './IWDescription';
import IWStat from './IWStat';
import { useState } from 'react';
import './IWPage.css';

const IWContainer = ({ hero }) => {
  const IWtype = ['Description', 'Stat'];
  const [currentType, setCurrentType] = useState('Description');
  const [isIW, setIsIW] = useState(true);
  const [isStat, setIsStat] = useState(false);
  function setState(type, isIWval, isStatval) {
    setCurrentType(type);
    setIsIW(isIWval);
    setIsStat(isStatval);
  }

  return (
    <div>
      <div className='weapon-button-container'>
        {IWtype.map((type, index) => {
          if (type === 'Description')
            return (
              <img
                src={
                  type === currentType
                    ? process.env.PUBLIC_URL + '/assets/hero/weapon-skill-icons/' + hero.replace(/ /g, '_') + '.png'
                    : process.env.PUBLIC_URL +
                      '/assets/hero/weapon-skill-icons/inactive/' +
                      hero.replace(/ /g, '_') +
                      '.png'
                }
                alt={hero + '_IW'}
                className='IW-button'
                onClick={() => setState(type, true, false)}
                key={index}
              ></img>
            );
          else
            return (
              <img
                src={
                  type === currentType
                    ? process.env.PUBLIC_URL + '/assets/hero/weapon-skill-icons/IW_stat.png'
                    : process.env.PUBLIC_URL + '/assets/hero/weapon-skill-icons/inactive/IW_stat.png'
                }
                alt='IW_Stat'
                className='IW-button'
                onClick={() => setState(type, false, true)}
                key={index}
              ></img>
            );
        })}
      </div>
      {currentType === 'Description' && <IWDescription hero={hero.replace(/-/g, ' ')} />}
      {currentType === 'Stat' && <IWStat />}
    </div>
  );
};

export default IWContainer;
