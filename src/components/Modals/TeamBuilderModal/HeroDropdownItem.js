import React from 'react';

function HeroDropdownItem({ hero }) {
  return (
    <div className='dropdown-list-item'>
      <img
        src={
          process.env.PUBLIC_URL + '/assets/factions/Luminarch-Shadowarch.png'
        }
        alt='Luminarch - Shadowarch faction'
      />
      <p>Lucifer</p>
    </div>
  );
}

export default HeroDropdownItem;
