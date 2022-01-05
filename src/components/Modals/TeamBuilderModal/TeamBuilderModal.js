import React, { useState } from 'react';
import ArtifactDropdown from './ArtifactDropdown';
import DivinityBuilder from './DivinityBuilder';
import HeroDropdown from './HeroDropdown';
import RuneDropdown from './RuneDropdown';

function TeamBuilderModal({
  setModal,
  selectedElement,
  teamData,
  setTeamData,
  reverseFormation,
}) {
  const [dropdown, setDropdown] = useState(false);

  //selections
  const [selectedHero, setSelectedHero] = useState(
    teamData.team[selectedElement].name
  );
  const [selectedRune, setSelectedRune] = useState(
    teamData.team[selectedElement].rune
  );
  const [selectedArtifact, setSelectedArtifact] = useState(
    teamData.team[selectedElement].artifact
  );
  const [selectedNodes, setSelectedNodes] = useState(
    teamData.team[selectedElement].divinityNodes
  );

  // build dropdowns
  const [runeDropdown, setRuneDropdown] = useState(false);
  const [artifactDropdown, setArtifactDropdown] = useState(false);
  const [divinityDropdown, setDivinityDropdown] = useState(false);
  const [divinityBuilderDropdown, setDivinityBuilderDropdown] = useState(false);

  const addToTeam = () => {
    let teamDataDeepCopy = JSON.parse(JSON.stringify(teamData));
    teamDataDeepCopy.team[selectedElement].name = selectedHero;
    teamDataDeepCopy.team[selectedElement].rune = selectedRune;
    teamDataDeepCopy.team[selectedElement].artifact = selectedArtifact;
    teamDataDeepCopy.team[selectedElement].divinityNodes = selectedNodes;
    teamDataDeepCopy.reverseFormation = reverseFormation;

    setTeamData(teamDataDeepCopy);
  };

  return (
    <div
      className='builder overlay'
      onClick={(e) => {
        setDropdown(false);
        setRuneDropdown(false);
        setArtifactDropdown(false);
      }}
    >
      <div className='builder-screen'>
        <div className='builder-header'>
          <h4>Hero Selector</h4>
        </div>
        <HeroDropdown
          dropdown={dropdown}
          setDropdown={setDropdown}
          selectedHero={selectedHero}
          setSelectedHero={setSelectedHero}
          setRuneDropdown={setRuneDropdown}
          setArtifactDropdown={setArtifactDropdown}
          teamData={teamData.team}
        />
        {/* -------------------------------------------------------------------- */}
        {selectedHero && (
          <div className='builds-container'>
            <h5>Hero build</h5>
            <div className='build-category'>
              <RuneDropdown
                runeDropdown={runeDropdown}
                setRuneDropdown={setRuneDropdown}
                selectedRune={selectedRune}
                setSelectedRune={setSelectedRune}
                setArtifactDropdown={setArtifactDropdown}
              />
            </div>
            <div className='build-category'>
              <ArtifactDropdown
                artifactDropdown={artifactDropdown}
                setArtifactDropdown={setArtifactDropdown}
                selectedArtifact={selectedArtifact}
                setSelectedArtifact={setSelectedArtifact}
                setRuneDropdown={setRuneDropdown}
              />
            </div>
            <div
              className={
                divinityDropdown
                  ? 'build-category divinity active'
                  : 'build-category divinity'
              }
            >
              <div
                className={
                  divinityDropdown ? 'build-dropdown active' : 'build-dropdown'
                }
                onClick={() => setDivinityDropdown(!divinityDropdown)}
              >
                <i className='fas fa-angle-right'></i>
                <span>Divinity build (optional)</span>
              </div>
              {/* --------------------------- Build UI Here --------------------------- */}
              <div className='build-ui'>
                <DivinityBuilder
                  divinityBuilderDropdown={divinityBuilderDropdown}
                  setDivinityBuilderDropdown={setDivinityBuilderDropdown}
                  selectedNodes={selectedNodes}
                  setSelectedNodes={setSelectedNodes}
                  setDropdown={setDropdown}
                  setRuneDropdown={setRuneDropdown}
                  setArtifactDropdown={setArtifactDropdown}
                  selectedHero={selectedHero}
                />
              </div>
            </div>
          </div>
        )}
        {/* -------------------------------------------------------------------- */}
        <div className='buttons-container'>
          <button onClick={() => setModal(false)}>Close</button>
          <button
            onClick={() => {
              addToTeam();
              setModal(false);
            }}
          >
            Add to team
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeamBuilderModal;
