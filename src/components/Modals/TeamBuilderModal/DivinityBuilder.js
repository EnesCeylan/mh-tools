import React, { useState } from 'react';
import heroDivinityData from '../../../data/heroDivinityData';
import divinityNotableData from '../../../data/divinityNotableData';

function DivinityBuilder({
  divinityBuilderDropdown,
  setDivinityBuilderDropdown,
  selectedNodes,
  setSelectedNodes,
  setDropdown,
  setRuneDropdown,
  setArtifactDropdown,
  selectedHero,
}) {
  const [selectionMode, setSelectionMode] = useState(false);
  const [divinityOverload, setDivinityOverload] = useState(false);
  const [divinityCostTotal, setDivinityCostTotal] = useState(0);

  const handleNodeSelect = (selectedNode) => {
    let totalCost = 0;

    let selectionCopy = JSON.parse(JSON.stringify(selectedNodes));
    selectionCopy[selectionMode] = selectedNode;

    selectionCopy.forEach((node) => {
      if (node) {
        totalCost += divinityNotableData[node].cost;
      }
    });

    setDivinityCostTotal(totalCost);

    if (totalCost > 6) {
      setDivinityOverload(true);
    } else {
      setSelectedNodes(selectionCopy);
      setSelectionMode(false);
    }
  };

  const divinityMaxed = () => {
    setDivinityOverload(true);

    setTimeout(() => {
      setDivinityOverload(false);
    }, 3000);
  };

  return (
    <React.Fragment>
      <div className='divinity-slots-container'>
        <button
          onClick={() => {
            divinityCostTotal === 6 ? divinityMaxed() : setSelectionMode('0');
          }}
        >
          <img
            src={
              process.env.PUBLIC_URL + '/assets/divinity/Divinity_Border.png'
            }
            alt='Divinity border'
          />
          {selectedNodes[0] && (
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/divinity/nodes/' +
                selectedNodes[0].replace(/ /g, '_') +
                '.png'
              }
              alt='Divinity border'
            />
          )}
        </button>
        <button
          onClick={() => {
            divinityCostTotal === 6 ? divinityMaxed() : setSelectionMode('1');
          }}
        >
          <img
            src={
              process.env.PUBLIC_URL + '/assets/divinity/Divinity_Border.png'
            }
            alt='Divinity border'
          />
          {selectedNodes[1] && (
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/divinity/nodes/' +
                selectedNodes[1].replace(/ /g, '_') +
                '.png'
              }
              alt='Divinity border'
            />
          )}
        </button>
        <button
          onClick={() => {
            divinityCostTotal === 6 ? divinityMaxed() : setSelectionMode('2');
          }}
        >
          <img
            src={
              process.env.PUBLIC_URL + '/assets/divinity/Divinity_Border.png'
            }
            alt='Divinity border'
          />
          {selectedNodes[2] && (
            <img
              src={
                process.env.PUBLIC_URL +
                '/assets/divinity/nodes/' +
                selectedNodes[2].replace(/ /g, '_') +
                '.png'
              }
              alt='Divinity border'
            />
          )}
        </button>
      </div>
      {divinityOverload && (
        <React.Fragment>
          <span className='divinity-warning'>
            Divinity talent cost cannot exceed 6.
          </span>
        </React.Fragment>
      )}
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
            {heroDivinityData[selectedHero].notablesOrdered
              .filter((node) => !selectedNodes.includes(node))
              .map((notable, index) => {
                return (
                  <div
                    className='dropdown-list-item'
                    key={index}
                    onClick={() => handleNodeSelect(notable)}
                  >
                    {notable}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default DivinityBuilder;
