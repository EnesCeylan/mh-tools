import React, { useState, useEffect } from 'react';

import weaponData from '../../../data/weaponData';

function WeaponBuilder({
  selectedWeaponBuild,
  setSelectedWeaponBuild,
  selectedHero,
  width,
}) {
  const [displayBonuses, setDisplayBonuses] = useState([]);

  const displaySwitch = (level) => {
    switch (level) {
      case '100':
        setDisplayBonuses([weaponData[selectedHero].firstWeapon.lv100]);
        break;
      case '200':
        setDisplayBonuses([
          weaponData[selectedHero].firstWeapon.lv100,
          weaponData[selectedHero].firstWeapon.lv200,
        ]);
        break;
      case '300':
        setDisplayBonuses([
          weaponData[selectedHero].firstWeapon.lv100,
          weaponData[selectedHero].firstWeapon.lv200,
          weaponData[selectedHero].firstWeapon.lv300,
        ]);
        break;
      case '400':
        setDisplayBonuses([
          weaponData[selectedHero].firstWeapon.lv100,
          weaponData[selectedHero].firstWeapon.lv200,
          weaponData[selectedHero].firstWeapon.lv300,
          weaponData[selectedHero].firstWeapon.lv400,
        ]);
        break;
      default:
        break;
    }
  };

  const handleClick = (level) => {
    selectedWeaponBuild === ''
      ? setSelectedWeaponBuild(level)
      : selectedWeaponBuild === level
      ? setSelectedWeaponBuild('')
      : setSelectedWeaponBuild(level);

    displaySwitch(level);

    console.log(width);
    if (width < 950) {
      setTimeout(() => {
        document.getElementById('weapon-dropdown').scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }, 0);
    }
  };

  useEffect(() => {
    displaySwitch(selectedWeaponBuild);
  }, []);

  return (
    <React.Fragment>
      {/* ---------------------- Level selectors ---------------------- */}
      <div className='weapon-builder-header'>
        {/* ---------------------- Level 100 ---------------------- */}
        <div className='level-selector'>
          <div
            className={
              selectedWeaponBuild === '100' ? 'level-btn active' : 'level-btn'
            }
            onClick={() => handleClick('100')}
          >
            {selectedWeaponBuild === '100' && <i className='fas fa-check'></i>}
          </div>
          <span className='level'>Level 100</span>
        </div>
        {/* ---------------------- Level 200 ---------------------- */}
        <div className='level-selector'>
          <div
            className={
              selectedWeaponBuild === '200' ? 'level-btn active' : 'level-btn'
            }
            onClick={() => handleClick('200')}
          >
            {selectedWeaponBuild === '200' && <i className='fas fa-check'></i>}
          </div>
          <span className='level'>Level 200</span>
        </div>
        {/* ---------------------- Level 300 ---------------------- */}
        <div className='level-selector'>
          <div
            className={
              selectedWeaponBuild === '300' ? 'level-btn active' : 'level-btn'
            }
            onClick={() => handleClick('300')}
          >
            {selectedWeaponBuild === '300' && <i className='fas fa-check'></i>}
          </div>
          <span className='level'>Level 300</span>
        </div>
        {/* ---------------------- Level 400 ---------------------- */}
        <div className='level-selector'>
          <div
            className={
              selectedWeaponBuild === '400' ? 'level-btn active' : 'level-btn'
            }
            onClick={() => handleClick('400')}
          >
            {selectedWeaponBuild === '400' && <i className='fas fa-check'></i>}
          </div>
          <span className='level'>Level 400</span>
        </div>
      </div>
      {/* ---------------------- Bonus and icon display ---------------------- */}
      <div
        className={selectedWeaponBuild === '' ? 'wrapper' : 'wrapper active'}
      >
        <img
          src={
            process.env.PUBLIC_URL +
            '/assets/hero/weapon-skill-icons/' +
            selectedHero.replace(/ /g, '_') +
            '.png'
          }
          alt={selectedHero + ' weapon skill'}
        />
        <div className='bonuses'>
          {displayBonuses.length > 0 &&
            displayBonuses.map((bonus, index) => {
              return (
                <p key={index}>
                  <strong>Lv{index + 1}00: </strong>
                  {bonus}
                </p>
              );
            })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default WeaponBuilder;
