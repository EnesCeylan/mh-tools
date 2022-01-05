import React, { useState } from 'react';

import heroDivinityData from '../../../data/heroDivinityData';
import divinityNotableData from '../../../data/divinityNotableData';

import DivinitySlot from './DivinitySlot';

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
  let warningTimer;
  const [selectionMode, setSelectionMode] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleSelection = (notable) => {
    let deepCopy = JSON.parse(JSON.stringify(selectedNodes));
    deepCopy[selectionMode] = notable;

    if (checkTotalCost(notable)) {
      setSelectedNodes(deepCopy);
    } else {
      setWarning(true);

      warningTimer = setTimeout(() => {
        setWarning(false);
      }, 3000);
      clearTimeout(warningTimer);
    }
  };

  const checkTotalCost = (notable) => {
    let currentTotalCost = 0;

    selectedNodes.forEach((node) => {
      if (node !== '') {
        currentTotalCost += divinityNotableData[node].cost;
      }
    });

    // If there's no selected node currently, just check if the addition will exceed the cost limit
    if (selectedNodes[selectionMode] === '') {
      if (divinityNotableData[notable].cost + currentTotalCost <= 6) {
        return true;
      } else {
        return false;
      }
    } else {
      //If there currently is a selected node, check if new node costs less than the current one.
      if (
        currentTotalCost +
          divinityNotableData[notable].cost -
          divinityNotableData[selectedNodes[selectionMode]].cost <=
        6
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <React.Fragment>
      <div className='divinity-slots-container'>
        {selectedNodes.map((node, index) => {
          return (
            <DivinitySlot
              selectionMode={selectionMode}
              selectedNode={selectedNodes[index]}
              setSelectionMode={setSelectionMode}
              index={index}
              key={index}
            />
          );
        })}
      </div>
      {warning && (
        <React.Fragment>
          <span
            className={warning ? 'divinity-warning active' : 'divinity-warning'}
          >
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
            <span className='select'>
              {selectedNodes[selectionMode]
                ? selectedNodes[selectionMode]
                : 'Choose divinity notable'}
            </span>
            <i className='fa fa-caret-down icon'></i>
          </div>
          <div className='dropdown-list divinity'>
            {heroDivinityData[selectedHero].notablesOrdered
              .filter((node) => !selectedNodes.includes(node))
              .map((notable, index) => {
                return (
                  <div
                    className='dropdown-list-item'
                    onClick={() => handleSelection(notable)}
                    key={index}
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
