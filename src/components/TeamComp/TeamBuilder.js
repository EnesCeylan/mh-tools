import './TeamComp.css';

import React, { useState, useEffect } from 'react';
import TeamBuilderModal from '../Modals/TeamBuilderModal/TeamBuilderModal';
import checkParamValidity from './checkParamValidity';
import HeroBuilder from './HeroBuilder';

import useWindowSize from '../../hooks/useWindowSize';

function TeamBuilder({ setShowMenu }) {
  const { width, height } = useWindowSize();

  const [reverseFormation, setReverseFormation] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  const [teamData, setTeamData] = useState({
    reverseFormation: false,
    team: [
      {
        name: '',
        rune: '',
        artifact: '',
        divinityNodes: ['', '', ''],
        weaponLv: '',
      },
      {
        name: '',
        rune: '',
        artifact: '',
        divinityNodes: ['', '', ''],
        weaponLv: '',
      },
      {
        name: '',
        rune: '',
        artifact: '',
        divinityNodes: ['', '', ''],
        weaponLv: '',
      },
      {
        name: '',
        rune: '',
        artifact: '',
        divinityNodes: ['', '', ''],
        weaponLv: '',
      },
      {
        name: '',
        rune: '',
        artifact: '',
        divinityNodes: ['', '', ''],
        weaponLv: '',
      },
    ],
  });

  const [selectedElement, setSelectedElement] = useState('');
  const [modal, setModal] = useState(false);

  const [copyToClipboard, setCopyToClipboard] = useState(false);

  let validParamExists = false;
  let linkDataObject;
  const linkParam = document.URL.match(/(?<=team-builder\/).+/g);
  if (linkParam) {
    try {
      linkDataObject = checkParamValidity(linkParam); //semi-shallow validity check for the object type link parameter
      if (linkDataObject) {
        validParamExists = true;
        // will not break the page load unless a user goes out of their way to import an object that matches all the keys but has non valid values.
      } else {
        console.log('Invalid parameter object has been passed.');
      }
    } catch (e) {
      validParamExists = false;
      console.log('Error: Invalid team builder parameter entered.');
    }
  }

  useEffect(() => {
    if (validParamExists) {
      let teamDataDeepCopy = JSON.parse(JSON.stringify(teamData));
      //Copy parameter values from the link to cloned data object
      //Formation type 3-2 or 2-3
      teamDataDeepCopy.reverseFormation = linkDataObject.reverseFormation;
      setReverseFormation(linkDataObject.reverseFormation);
      teamDataDeepCopy.team.forEach((hero, index) => {
        //Hero name
        hero.name = linkDataObject.team[index].name;
        //Selected rune for the hero
        hero.rune = linkDataObject.team[index].rune;
        //Selected artifact for the hero
        hero.artifact = linkDataObject.team[index].artifact;
        //Selected divinity nodes for the hero
        hero.divinityNodes = linkDataObject.team[index].divinityNodes;
        //Selected weapon level for the hero
        hero.weaponLv = linkDataObject.team[index].weaponLv;
        //Assign the cloned object as state for import all values
      });

      setTimeout(() => {
        setTeamData(teamDataDeepCopy);
      }, 0);

      console.log('teamDataDeepCopy', teamDataDeepCopy);
      console.log('teamData', teamData);
    }
  }, []);

  useEffect(() => {
    if (width < 950) {
      document.body.classList.toggle('modal-open', modal);
    }
  }, [modal]);

  useEffect(() => {
    let deepCopy = JSON.parse(JSON.stringify(teamData));
    deepCopy.reverseFormation = reverseFormation;
    setTeamData(deepCopy);
  }, [reverseFormation]);

  const handleClick = (index) => {
    if (width < 950) {
      setModal(true);
    }
  };

  const exportBuild = () => {
    // can be updated to navigator.clipboard.writeText when more browsers support it.
    const input = document.createElement('input');
    input.type = 'url';
    input.value =
      'https://enesceylan.github.io/mythic-tools/#/team-builder/' +
      btoa(JSON.stringify(teamData));
    input.setAttribute('id', 'copy-url');

    document.getElementsByTagName('body')[0].appendChild(input);

    const url = document.getElementById('copy-url');
    url.select();
    document.execCommand('Copy');
    url.remove();
  };

  const showPopup = () => {
    setCopyToClipboard(true);

    setTimeout(() => {
      setCopyToClipboard(false);
    }, 3000);
  };

  const handleFormationSwitch = () => {
    setReverseFormation(!reverseFormation);

    let teamDataCopy = JSON.parse(JSON.stringify(teamData));
    teamDataCopy.reverseFormation = !teamData.reverseFormation;

    setTeamData(teamDataCopy);
  };

  return width < 950 ? (
    <div className='team-builder-container' onClick={() => setShowMenu(false)}>
      <div
        className={tooltip ? 'tooltip-container active' : 'tooltip-container'}
        onClick={() => setTooltip(!tooltip)}
      >
        <div className='tooltip-header'>
          <div className='wrapper'>
            <i className='fas fa-chevron-right'></i>
            <h4>How it works</h4>
          </div>
          <i className='far fa-question-circle'></i>
        </div>
        <p>
          Click on a position frame to select and customize your hero. Clicking
          on "export" button will automatically copy the build link for you to
          share!
          <br />
          <br />
          You don't have to fill every option for sharing the build,
          customization is completely optional!
        </p>
      </div>
      <div className='builder-buttons-container'>
        <button onClick={() => handleFormationSwitch()}>
          Switch formation
        </button>
        <button
          onClick={() => {
            exportBuild();
            showPopup();
          }}
        >
          Export Team <i className='fas fa-link'></i>
          {copyToClipboard && <div className='info-popup'>Link copied!</div>}
        </button>
      </div>
      {!reverseFormation && (
        <div className='build-container'>
          <div className='row back'>
            <div
              className={
                validParamExists || teamData.team[2].name !== ''
                  ? 'position active ' + teamData.team[2].name
                  : 'position'
              }
              onClick={() => {
                handleClick(2);
                setSelectedElement(2);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[3].name !== ''
                  ? 'position active ' + teamData.team[3].name.replace('&', '')
                  : 'position'
              }
              onClick={() => {
                handleClick(3);
                setSelectedElement(3);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[4].name !== ''
                  ? 'position active ' + teamData.team[4].name.replace('&', '')
                  : 'position'
              }
              onClick={() => {
                handleClick(4);
                setSelectedElement(4);
              }}
            ></div>
          </div>
          <div className='row front'>
            <div
              className={
                validParamExists || teamData.team[0].name !== ''
                  ? 'position active ' + teamData.team[0].name.replace('&', '')
                  : 'position'
              }
              onClick={() => {
                handleClick(0);
                setSelectedElement(0);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[1].name !== ''
                  ? 'position active ' + teamData.team[1].name.replace('&', '')
                  : 'position'
              }
              onClick={() => {
                handleClick(1);
                setSelectedElement(1);
              }}
            ></div>
          </div>
        </div>
      )}
      {reverseFormation && (
        <div className='build-container reverse'>
          <div className='row back'>
            <div
              className={
                validParamExists || teamData.team[0].name !== ''
                  ? 'position active ' + teamData.team[0].name.replace('&', '')
                  : 'position'
              }
              onClick={() => {
                handleClick(0);
                setSelectedElement(0);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[1].name !== ''
                  ? 'position active ' + teamData.team[1].name.replace('&', '')
                  : 'position'
              }
              onClick={() => {
                handleClick(1);
                setSelectedElement(1);
              }}
            ></div>
          </div>
          <div className='row front'>
            <div
              className={
                validParamExists || teamData.team[2].name !== ''
                  ? 'position active ' + teamData.team[2].name.replace('&', '')
                  : 'position'
              }
              onClick={() => {
                handleClick(2);
                setSelectedElement(2);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[3].name !== ''
                  ? 'position active ' + teamData.team[3].name.replace('&', '')
                  : 'position'
              }
              onClick={() => {
                handleClick(3);
                setSelectedElement(3);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[4].name !== ''
                  ? 'position active ' + teamData.team[4].name
                  : 'position'
              }
              onClick={() => {
                handleClick(4);
                setSelectedElement(4);
              }}
            ></div>
          </div>
        </div>
      )}
      {modal && (
        <TeamBuilderModal
          setModal={setModal}
          selectedElement={selectedElement}
          teamData={teamData}
          setTeamData={setTeamData}
          reverseFormation={reverseFormation}
          width={width}
        />
      )}
    </div>
  ) : (
    <div className='team-builder-container' onClick={() => setShowMenu(false)}>
      <div className='wrapper'>
        <div
          className={tooltip ? 'tooltip-container active' : 'tooltip-container'}
          onClick={() => setTooltip(!tooltip)}
        >
          <div className='tooltip-header'>
            <div className='wrapper'>
              <i className='fas fa-chevron-right'></i>
              <h4>How it works</h4>
            </div>
            <i className='far fa-question-circle'></i>
          </div>
          <p>
            Select the slots to open the character selection to select and
            customize your hero. Clicking on "export" button will automatically
            copy the build link for you to share!
            <br />
            <br />
            You don't have to fill every option for sharing the build,
            customization is completely optional!
          </p>
        </div>
        <div className='builder-buttons-container'>
          <button onClick={() => handleFormationSwitch()}>
            Switch formation
          </button>
          <button
            onClick={() => {
              exportBuild();
              showPopup();
            }}
          >
            Export Team <i className='fas fa-link'></i>
            {copyToClipboard && <div className='info-popup'>Link copied!</div>}
          </button>
        </div>
      </div>
      <div className='wrapper'>
        {!reverseFormation && (
          <div className='build-container'>
            <div className='row back'>
              <div
                className={
                  validParamExists || teamData.team[2].name !== ''
                    ? 'position ' + teamData.team[2].name
                    : 'position'
                }
                onClick={() => {
                  handleClick(2);
                  setSelectedElement(2);
                }}
              ></div>
              <div
                className={
                  validParamExists || teamData.team[3].name !== ''
                    ? 'position ' + teamData.team[3].name.replace('&', '')
                    : 'position'
                }
                onClick={() => {
                  handleClick(3);
                  setSelectedElement(3);
                }}
              ></div>
              <div
                className={
                  validParamExists || teamData.team[4].name !== ''
                    ? 'position ' + teamData.team[4].name.replace('&', '')
                    : 'position'
                }
                onClick={() => {
                  handleClick(4);
                  setSelectedElement(4);
                }}
              ></div>
            </div>
            <div className='row front'>
              <div
                className={
                  validParamExists || teamData.team[0].name !== ''
                    ? 'position ' + teamData.team[0].name.replace('&', '')
                    : 'position'
                }
                onClick={() => {
                  handleClick(0);
                  setSelectedElement(0);
                }}
              ></div>
              <div
                className={
                  validParamExists || teamData.team[1].name !== ''
                    ? 'position ' + teamData.team[1].name.replace('&', '')
                    : 'position'
                }
                onClick={() => {
                  handleClick(1);
                  setSelectedElement(1);
                }}
              ></div>
            </div>
          </div>
        )}
        {reverseFormation && (
          <div className='build-container reverse'>
            <div className='row back'>
              <div
                className={
                  validParamExists || teamData.team[0].name !== ''
                    ? 'position ' + teamData.team[0].name.replace('&', '')
                    : 'position'
                }
                onClick={() => {
                  handleClick(0);
                  setSelectedElement(0);
                }}
              ></div>
              <div
                className={
                  validParamExists || teamData.team[1].name !== ''
                    ? 'position ' + teamData.team[1].name.replace('&', '')
                    : 'position'
                }
                onClick={() => {
                  handleClick(1);
                  setSelectedElement(1);
                }}
              ></div>
            </div>
            <div className='row front'>
              <div
                className={
                  validParamExists || teamData.team[2].name !== ''
                    ? 'position ' + teamData.team[2].name.replace('&', '')
                    : 'position'
                }
                onClick={() => {
                  handleClick(2);
                  setSelectedElement(2);
                }}
              ></div>
              <div
                className={
                  validParamExists || teamData.team[3].name !== ''
                    ? 'position ' + teamData.team[3].name.replace('&', '')
                    : 'position'
                }
                onClick={() => {
                  handleClick(3);
                  setSelectedElement(3);
                }}
              ></div>
              <div
                className={
                  validParamExists || teamData.team[4].name !== ''
                    ? 'position ' + teamData.team[4].name
                    : 'position'
                }
                onClick={() => {
                  handleClick(4);
                  setSelectedElement(4);
                }}
              ></div>
            </div>
          </div>
        )}
        <HeroBuilder
          setSelectedElement={setSelectedElement}
          selectedElement={selectedElement}
          teamData={teamData}
          setTeamData={setTeamData}
          width={width}
        />
      </div>
    </div>
  );
}

export default TeamBuilder;
