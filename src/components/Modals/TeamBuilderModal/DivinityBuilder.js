import React, { useState } from 'react';
import heroDivinityData from '../../../data/heroDivinityData';

function DivinityBuilder({
  divinityBuilderDropdown,
  setDivinityBuilderDropdown,
  setDropdown,
  setRuneDropdown,
  setArtifactDropdown,
  selectedHero,
}) {
  const [selectionMode, setSelectionMode] = useState(false);

  const [slotOne, setSlotOne] = useState('');
  const [slotTwo, setSlotTwo] = useState('');
  const [slotThree, setSlotThree] = useState('');

  return (
    <React.Fragment>
      <div className='divinity-slots-container'>
        <button onClick={() => setSelectionMode(0)}>
          <img
            src={
              process.env.PUBLIC_URL + '/assets/divinity/Divinity_Border.png'
            }
            alt='Divinity border'
          />
          {slotOne && (
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/divinity/nodes/' +
                slotOne.replace(/ /g, '_') +
                '.png'
              }
              alt='Divinity border'
            />
          )}
        </button>
        <button onClick={() => setSelectionMode(1)}>
          <img
            src={
              process.env.PUBLIC_URL + '/assets/divinity/Divinity_Border.png'
            }
            alt='Divinity border'
          />
          {slotTwo && (
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/divinity/nodes/' +
                slotTwo.replace(/ /g, '_') +
                '.png'
              }
              alt='Divinity border'
            />
          )}
        </button>
        <button onClick={() => setSelectionMode(2)}>
          <img
            src={
              process.env.PUBLIC_URL + '/assets/divinity/Divinity_Border.png'
            }
            alt='Divinity border'
          />
          {slotThree && (
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/divinity/nodes/' +
                slotThree.replace(/ /g, '_') +
                '.png'
              }
              alt='Divinity border'
            />
          )}
        </button>
      </div>
      {selectionMode && (
        <div
          className={divinityBuilderDropdown ? 'dropdown active' : 'dropdown'}
          onClick={(e) => {
            e.stopPropagation();
            setDivinityBuilderDropdown(!divinityBuilderDropdown);
            setDropdown(false);
            setRuneDropdown(false);
            setArtifactDropdown(false);
          }}
        >
          <div className='dropdown-select divinity'>
            <span className='select'>Choose divinity notable</span>
            <i className='fa fa-caret-down icon'></i>
          </div>
          <div className='dropdown-list divinity'>
            {heroDivinityData[selectedHero].notablesOrdered.map(
              (notable, index) => {
                return (
                  <div className='dropdown-list-item' key={index}>
                    {notable}
                  </div>
                );
              }
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default DivinityBuilder;
