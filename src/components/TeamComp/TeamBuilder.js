import './TeamComp.css';

import { useState, useEffect } from 'react';
import TeamBuilderModal from '../Modals/TeamBuilderModal/TeamBuilderModal';
import checkParamValidity from './checkParamValidity';

function TeamBuilder({ setShowMenu }) {
  const [reverseFormation, setReverseFormation] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  const [teamData, setTeamData] = useState({
    reverseFormation: false,
    team: [
      { name: '', rune: '', artifact: '', divinityNodes: ['', '', ''] },
      { name: '', rune: '', artifact: '', divinityNodes: ['', '', ''] },
      { name: '', rune: '', artifact: '', divinityNodes: ['', '', ''] },
      { name: '', rune: '', artifact: '', divinityNodes: ['', '', ''] },
      { name: '', rune: '', artifact: '', divinityNodes: ['', '', ''] },
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
      linkDataObject = checkParamValidity(linkParam);
      if (linkDataObject) {
        validParamExists = true;
      }
    } catch (e) {
      validParamExists = false;
      console.log('Error: Non valid team builder parameter entered.');
    }
  }

  useEffect(() => {
    if (validParamExists) {
      let teamDataDeepCopy = JSON.parse(JSON.stringify(teamData));
      teamData.team.forEach((hero, index) => {
        setReverseFormation(linkDataObject.reverseFormation);

        teamDataDeepCopy.reverseFormation = linkDataObject.reverseFormation;
        teamDataDeepCopy.team[index].name = linkDataObject.team[index].name;
        teamDataDeepCopy.team[index].rune = linkDataObject.team[index].rune;
        teamDataDeepCopy.team[index].artifact =
          linkDataObject.team[index].artifact;
        teamDataDeepCopy.team[index].divinityNodes =
          linkDataObject.team[index].divinityNodes;

        setTeamData(teamDataDeepCopy);
      });
    }
  }, []);

  const handleClick = (index) => {
    setSelectedElement(index);
    setModal(true);
  };

  const exportBuild = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        'https://enesceylan.github.io/mythic-tools/#/team-builder/' +
          btoa(JSON.stringify(teamData))
      );
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
    console.log(teamDataCopy);

    setTeamData(teamDataCopy);
  };

  return (
    <div className='team-builder-container' onClick={() => setShowMenu(false)}>
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
        </p>
      </div>
      {!reverseFormation && (
        <div className='build-container'>
          <div className='row back'>
            <div
              className={
                validParamExists || teamData.team[2].name !== ''
                  ? 'position three ' + teamData.team[2].name
                  : 'position three'
              }
              onClick={() => {
                handleClick(2);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[3].name !== ''
                  ? 'position four ' + teamData.team[3].name.replace('&', '')
                  : 'position four'
              }
              onClick={() => {
                handleClick(3);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[4].name !== ''
                  ? 'position five ' + teamData.team[4].name.replace('&', '')
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
                validParamExists || teamData.team[0].name !== ''
                  ? 'position one ' + teamData.team[0].name.replace('&', '')
                  : 'position one'
              }
              onClick={() => {
                handleClick(0);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[1].name !== ''
                  ? 'position two ' + teamData.team[1].name.replace('&', '')
                  : 'position two'
              }
              onClick={() => {
                handleClick(1);
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
                  ? 'position four ' + teamData.team[0].name.replace('&', '')
                  : 'position four'
              }
              onClick={() => {
                handleClick(0);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[1].name !== ''
                  ? 'position five ' + teamData.team[1].name.replace('&', '')
                  : 'position five'
              }
              onClick={() => {
                handleClick(1);
              }}
            ></div>
          </div>
          <div className='row front'>
            <div
              className={
                validParamExists || teamData.team[2].name !== ''
                  ? 'position one ' + teamData.team[2].name.replace('&', '')
                  : 'position one'
              }
              onClick={() => {
                handleClick(2);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[3].name !== ''
                  ? 'position two ' + teamData.team[3].name.replace('&', '')
                  : 'position two'
              }
              onClick={() => {
                handleClick(3);
              }}
            ></div>
            <div
              className={
                validParamExists || teamData.team[4].name !== ''
                  ? 'position three ' + teamData.team[4].name
                  : 'position three'
              }
              onClick={() => {
                handleClick(4);
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
        />
      )}
    </div>
  );
}

export default TeamBuilder;
