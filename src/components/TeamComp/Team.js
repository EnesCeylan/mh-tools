import './TeamComp.css';

import { useState, useEffect } from 'react';

function Team({ setShowMenu }) {
  const [positionBG, setPositionBG] = useState(['', '', '', '', '']);

  const [selectedElement, setSelectedElement] = useState('');
  const [modal, setModal] = useState(false);

  let validParamExists = false;
  let linkDataObject;
  const linkParam = document.URL.match(/(?<=team-comp\/).+/g);
  try {
    linkDataObject = JSON.parse(atob(linkParam));
    validParamExists = true;
    console.log(linkDataObject);
  } catch (e) {
    console.log('invalid json');
  }

  useEffect(() => {
    if (validParamExists) {
      let deepStateCopy = JSON.parse(JSON.stringify(positionBG));
      positionBG.forEach((position, index) => {
        console.log(linkDataObject[index]);
        deepStateCopy[index] = linkDataObject[index].replace(/ /g, '_');
        setPositionBG(deepStateCopy);
      });
    } else {
      console.log('Hi mom!');
    }
  }, []);

  const handleClick = (index) => {
    setSelectedElement(index);
    setModal(true);
  };

  return (
    <div
      className='team-compositor-container'
      onClick={() => setShowMenu(false)}
    >
      <div className='composition-container'>
        <div className='row back'>
          <div
            className={
              validParamExists
                ? 'position three ' + positionBG[2]
                : 'position three'
            }
            onClick={() => {
              handleClick(2);
            }}
          ></div>
          <div
            className='position four'
            onClick={() => {
              handleClick(3);
            }}
          ></div>
          <div
            className='position five'
            onClick={() => {
              handleClick(4);
            }}
          ></div>
        </div>
        <div className='row front'>
          <div
            className='position one'
            onClick={() => {
              handleClick(0);
            }}
          ></div>
          <div
            className='position two'
            onClick={() => {
              handleClick(1);
            }}
          ></div>
        </div>
      </div>
      {modal && (
        <div className='overlay' onClick={() => setModal(false)}>
          <div className='character-selection-modal'></div>
        </div>
      )}
    </div>
  );
}

export default Team;
