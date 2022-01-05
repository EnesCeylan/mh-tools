import React from 'react';
import divinityNotableData from '../../../data/divinityNotableData';

function DivinitySlot({
  selectionMode,
  selectedNode,
  setSelectionMode,
  index,
}) {
  return (
    <button
      className={selectionMode === index.toString() ? 'active' : 'passive'}
      onClick={() => setSelectionMode(index.toString())}
    >
      <img
        src={process.env.PUBLIC_URL + '/assets/divinity/Divinity_Border.png'}
        alt='Divinity border'
      />
      {selectedNode && (
        <React.Fragment>
          <img
            src={
              process.env.PUBLIC_URL +
              '/assets/divinity/nodes/' +
              selectedNode.replace(/ /g, '_') +
              '.png'
            }
            alt={selectedNode}
          />
          <div className='cost-container'>
            {[...Array(divinityNotableData[selectedNode].cost)].map(
              (value, index) => {
                return (
                  <img
                    src={
                      process.env.PUBLIC_URL + '/assets/divinity/Cost_Icon.png'
                    }
                    alt='Divinity cost icon'
                    key={index}
                  />
                );
              }
            )}
          </div>
        </React.Fragment>
      )}
    </button>
  );
}

export default DivinitySlot;
