import React, { useState } from 'react';
import heroDivinityData from '../../../data/heroDivinityData';
import divinityNotableData from '../../../data/divinityNotableData';

// COMPLETELY REWORK THIS FUNCTIONALITY, THIS CODE IS LOOKING DISGUSTING!!!!

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
    if (divinityCostTotal <= 6) {
      let totalCost = 0;

      let selectionCopy = JSON.parse(JSON.stringify(selectedNodes));
      selectionCopy[selectionMode] = selectedNode;

      selectionCopy.forEach((node) => {
        if (node) {
          totalCost += divinityNotableData[node].cost;
        }
      });

      if (divinityNotableData[selectedNode].cost + divinityCostTotal <= 6) {
        setDivinityCostTotal(totalCost);
        setSelectedNodes(selectionCopy);
        setSelectionMode(false);
      } else {
        if (selectedNodes[selectionMode] === '') {
          divinityMaxed();
        } else {
          if (totalCost <= 6) {
            setDivinityCostTotal(totalCost);
            setSelectedNodes(selectionCopy);
            setSelectionMode(false);
          }
        }
      }
    }
  };

  const divinityMaxed = () => {
    setDivinityOverload(true);

    setTimeout(() => {
      setDivinityOverload(false);
    }, 3000);
  };

  const showCostIcons = (cost) => {
    let arr = [];

    for (let i = 0; i < cost; i++) {
      arr.push('');
    }

    return arr;
  };

  return (
    <React.Fragment>
      <div className='divinity-slots-container'>
        <button
          className={selectionMode === '0' ? 'active' : 'passive'}
          onClick={() => {
            if (divinityCostTotal > 6) {
              divinityMaxed();
              setSelectionMode('0');
            } else {
              setSelectionMode('0');
            }
          }}
        >
          <img
            src={
              process.env.PUBLIC_URL + '/assets/divinity/Divinity_Border.png'
            }
            alt='Divinity border'
          />
          {selectedNodes[0] && (
            <React.Fragment>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/divinity/nodes/' +
                  selectedNodes[0].replace(/ /g, '_') +
                  '.png'
                }
                alt={selectedNodes[0]}
              />
              <div className='cost-container'>
                {showCostIcons(divinityNotableData[selectedNodes[0]].cost).map(
                  (icon, index) => {
                    return (
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/assets/divinity/Cost_Icon.png'
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
        <button
          className={selectionMode === '1' ? 'active' : 'passive'}
          onClick={() => {
            if (divinityCostTotal > 6) {
              divinityMaxed();
              setSelectionMode('1');
            } else {
              setSelectionMode('1');
            }
          }}
        >
          <img
            src={
              process.env.PUBLIC_URL + '/assets/divinity/Divinity_Border.png'
            }
            alt='Divinity border'
          />
          {selectedNodes[1] && (
            <React.Fragment>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/divinity/nodes/' +
                  selectedNodes[1].replace(/ /g, '_') +
                  '.png'
                }
                alt={selectedNodes[1]}
              />
              <div className='cost-container'>
                {showCostIcons(divinityNotableData[selectedNodes[1]].cost).map(
                  (icon, index) => {
                    return (
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/assets/divinity/Cost_Icon.png'
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
        <button
          className={selectionMode === '2' ? 'active' : 'passive'}
          onClick={() => {
            if (divinityCostTotal > 6) {
              divinityMaxed();
              setSelectionMode('2');
            } else {
              setSelectionMode('2');
            }
          }}
        >
          <img
            src={
              process.env.PUBLIC_URL + '/assets/divinity/Divinity_Border.png'
            }
            alt='Divinity border'
          />
          {selectedNodes[2] && (
            <React.Fragment>
              <img
                src={
                  process.env.PUBLIC_URL +
                  '/assets/divinity/nodes/' +
                  selectedNodes[2].replace(/ /g, '_') +
                  '.png'
                }
                alt={selectedNodes[2]}
              />
              <div className='cost-container'>
                {showCostIcons(divinityNotableData[selectedNodes[2]].cost).map(
                  (icon, index) => {
                    return (
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '/assets/divinity/Cost_Icon.png'
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
      </div>
      {divinityOverload && (
        <React.Fragment>
          <span
            className={
              divinityOverload ? 'divinity-warning active' : 'divinity-warning'
            }
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
                    key={index}
                    onClick={() => {
                      if (divinityCostTotal >= 6) {
                        if (!selectedNodes[selectionMode]) {
                          divinityMaxed();
                        } else {
                          handleNodeSelect(notable);
                        }
                      } else {
                        handleNodeSelect(notable);
                      }
                    }}
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
