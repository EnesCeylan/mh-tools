import React, { useState } from 'react';
import HeroDropdown from './HeroDropdown';

function TeamBuilderModal({ setModal }) {
  const [heroSelected, setHeroSelected] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  return (
    <div
      className='builder overlay'
      onClick={(e) => {
        setDropDown(false);
      }}
    >
      <div className='builder-screen'>
        <div className='builder-header'>
          <h4>Team Builder</h4>
        </div>
        {/* -------------------------------------------------------------------- */}
        {!heroSelected && (
          <HeroDropdown dropDown={dropDown} setDropDown={setDropDown} />
        )}
        {/* -------------------------------------------------------------------- */}
        <div className='buttons-container'>
          <button onClick={() => setModal(false)}>Close</button>
          <button>Add to team</button>
        </div>
      </div>
    </div>
  );
}

export default TeamBuilderModal;
