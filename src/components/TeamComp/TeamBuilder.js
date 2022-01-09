import './TeamComp.css';

import React, { useState, useEffect } from 'react';

import TeamBuilderModal from '../Modals/TeamBuilderModal';
import checkParamValidity from './functions/checkParamValidity';
import HeroBuilder from './HeroBuilder';

import { useWindowSize } from 'react-use';
import BuildContainer from './components/BuildContainer';
import BuildContainerReverse from './components/BuildContainerReverse';
import exportBuild from './functions/exportBuild';

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
            exportBuild(teamData);
            showPopup();
          }}
        >
          Export Team <i className='fas fa-link'></i>
          {copyToClipboard && <div className='info-popup'>Link copied!</div>}
        </button>
      </div>
      {!reverseFormation && (
        <BuildContainer
          validParamExists={validParamExists}
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
        />
      )}
      {reverseFormation && (
        <BuildContainerReverse
          validParamExists={validParamExists}
          teamData={teamData}
          setTeamData={setTeamData}
          handleClick={handleClick}
          setSelectedElement={setSelectedElement}
        />
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
              exportBuild(teamData);
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
          <BuildContainer
            validParamExists={validParamExists}
            teamData={teamData}
            setTeamData={setTeamData}
            handleClick={handleClick}
            setSelectedElement={setSelectedElement}
          />
        )}
        {reverseFormation && (
          <BuildContainerReverse
            validParamExists={validParamExists}
            teamData={teamData}
            setTeamData={setTeamData}
            handleClick={handleClick}
            setSelectedElement={setSelectedElement}
          />
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
