import './TeamComp.css';

import { useState, useEffect } from 'react';

function Team({ setShowMenu }) {
  const [positionBG, setPositionBG] = useState(['', '', '', '', '']);

  const [selectedElement, setSelectedElement] = useState('');
  const [modal, setModal] = useState(false);

  let validParamExists = false;
  let linkDataObject;
  const linkParam = document.URL.match(/(?<=team-builder\/).+/g);
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
    <div className='team-builder-container' onClick={() => setShowMenu(false)}>
      <div className='build-container'>
        <div className='row back'>
          <div
            className={
              validParamExists
                ? 'position three ' + positionBG[2].replace('&', '')
                : 'position three'
            }
            onClick={() => {
              handleClick(2);
            }}
          ></div>
          <div
            className={
              validParamExists
                ? 'position four ' + positionBG[3].replace('&', '')
                : 'position four'
            }
            onClick={() => {
              handleClick(3);
            }}
          ></div>
          <div
            className={
              validParamExists
                ? 'position five ' + positionBG[4].replace('&', '')
                : 'position five'
            }
            onClick={() => {
              handleClick(4);
            }}
          ></div>
        </div>
        <div className='row front'>
          <div
            className={
              validParamExists
                ? 'position one ' + positionBG[0].replace('&', '')
                : 'position one'
            }
            onClick={() => {
              handleClick(0);
            }}
          ></div>
          <div
            className={
              validParamExists
                ? 'position two ' + positionBG[1].replace('&', '')
                : 'position two'
            }
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
