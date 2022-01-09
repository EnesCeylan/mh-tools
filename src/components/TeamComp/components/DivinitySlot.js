import React, { useState, useEffect } from 'react';
import divinityNotableData from '../../../data/divinityNotableData';

function DivinitySlot({
  selectionMode,
  selectedNode,
  selectedNodes,
  setSelectedNodes,
  setSelectionMode,
  index,
}) {
  const [deleteNode, setDeleteNode] = useState(false);

  useEffect(() => {
    if (deleteNode === true) {
      setSelectionMode(index.toString());
      let copy = JSON.parse(JSON.stringify(selectedNodes));
      copy[selectionMode] = '';

      setSelectionMode(false);
      setSelectedNodes(copy);
    }

    setDeleteNode(false);
  }, [deleteNode]);

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
          <i
            className='fas fa-times-circle'
            onClick={() => setDeleteNode(true)}
          ></i>
        </React.Fragment>
      )}
    </button>
  );
}

export default DivinitySlot;
