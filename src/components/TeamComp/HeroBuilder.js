import React, { useState, useEffect } from 'react';

import HeroDropdown from './components/HeroDropdown';
import RuneDropdown from './components/RuneDropdown';
import ArtifactDropdown from './components/ArtifactDropdown';
import DivinityBuilder from './components/DivinityBuilder';
import WeaponBuilder from './components/WeaponBuilder';

function HeroBuilder({
  setSelectedElement,
  selectedElement,
  teamData,
  setTeamData,
  width,
}) {
  const [dropdown, setDropdown] = useState(false);

  //selections
  const [selectedHero, setSelectedHero] = useState('');
  const [selectedRune, setSelectedRune] = useState('');
  const [selectedArtifact, setSelectedArtifact] = useState('');
  const [selectedNodes, setSelectedNodes] = useState(['', '', '']);
  const [selectedWeaponBuild, setSelectedWeaponBuild] = useState('');

  // build dropdowns
  const [runeDropdown, setRuneDropdown] = useState(false);
  const [artifactDropdown, setArtifactDropdown] = useState(false);
  const [divinityDropdown, setDivinityDropdown] = useState(false);
  const [divinityBuilderDropdown, setDivinityBuilderDropdown] = useState(false);
  const [weaponBuilderDropdown, setWeaponBuilderDropdown] = useState(false);

  const addToTeam = () => {
    const deepCopy = JSON.parse(JSON.stringify(teamData));

    deepCopy.team[selectedElement].name = selectedHero;
    deepCopy.team[selectedElement].rune = selectedRune;
    deepCopy.team[selectedElement].artifact = selectedArtifact;
    deepCopy.team[selectedElement].divinityNodes = selectedNodes;
    deepCopy.team[selectedElement].weaponLv = selectedWeaponBuild;

    setTeamData(deepCopy);

    // Reset selection and values
    setSelectedElement('');
    setSelectedHero('');
    setSelectedRune('');
    setSelectedArtifact('');
    setSelectedNodes(['', '', '']);
    setSelectedWeaponBuild('');
  };

  //If a hero already exists in the slot, update the builder UI with it's values
  useEffect(() => {
    if (selectedElement !== '') {
      setSelectedHero(teamData.team[selectedElement].name);
      setSelectedRune(teamData.team[selectedElement].rune);
      setSelectedArtifact(teamData.team[selectedElement].artifact);
      setSelectedNodes(teamData.team[selectedElement].divinityNodes);
      setSelectedWeaponBuild(teamData.team[selectedElement].weaponLv);
    }
  }, [selectedElement]);

  return (
    <div
      className={
        selectedElement === ''
          ? 'build-ui-desktop inactive'
          : 'build-ui-desktop'
      }
    >
      {selectedElement === '' ? (
        <h2>Click on any cell to start!</h2>
      ) : (
        <React.Fragment>
          <h4>Hero Selector</h4>
          <HeroDropdown
            dropdown={dropdown}
            setDropdown={setDropdown}
            selectedHero={selectedHero}
            setSelectedHero={setSelectedHero}
            setRuneDropdown={setRuneDropdown}
            setArtifactDropdown={setArtifactDropdown}
            teamData={teamData.team}
            width={width}
            setSelectedNodes={setSelectedNodes}
          />
        </React.Fragment>
      )}
      {selectedHero !== '' && (
        <React.Fragment>
          <h5>Hero build (optional)</h5>
          <span>(scroll down for more options)</span>
          <div className='build-category'>
            <RuneDropdown
              runeDropdown={runeDropdown}
              setRuneDropdown={setRuneDropdown}
              selectedRune={selectedRune}
              setSelectedRune={setSelectedRune}
              setArtifactDropdown={setArtifactDropdown}
              width={width}
            />
          </div>
          <div className='build-category'>
            <ArtifactDropdown
              artifactDropdown={artifactDropdown}
              setArtifactDropdown={setArtifactDropdown}
              selectedArtifact={selectedArtifact}
              setSelectedArtifact={setSelectedArtifact}
              setRuneDropdown={setRuneDropdown}
              width={width}
            />
          </div>
          <div
            className={
              divinityDropdown
                ? 'build-category divinity active'
                : 'build-category divinity'
            }
            id='divinity-dropdown'
          >
            <div
              className={
                divinityDropdown ? 'build-dropdown active' : 'build-dropdown'
              }
              onClick={() => {
                setDivinityDropdown(!divinityDropdown);
                setTimeout(() => {
                  document.getElementById('divinity-dropdown').scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                  });
                }, 0);
              }}
            >
              <i className='fas fa-angle-right'></i>
              <span>Divinity build</span>
            </div>
            {/* --------------------------- Build UI Here --------------------------- */}
            <div className='build-ui' id='divinity-build-ui'>
              <DivinityBuilder
                divinityBuilderDropdown={divinityBuilderDropdown}
                setDivinityBuilderDropdown={setDivinityBuilderDropdown}
                selectedNodes={selectedNodes}
                setSelectedNodes={setSelectedNodes}
                setDropdown={setDropdown}
                setRuneDropdown={setRuneDropdown}
                setArtifactDropdown={setArtifactDropdown}
                selectedHero={selectedHero}
                width={width}
              />
            </div>
          </div>
          <div
            className={
              weaponBuilderDropdown
                ? 'build-category weapon active'
                : 'build-category weapon'
            }
            id='weapon-dropdown'
          >
            <div
              className={
                weaponBuilderDropdown
                  ? 'build-dropdown active'
                  : 'build-dropdown'
              }
              onClick={() => {
                setWeaponBuilderDropdown(!weaponBuilderDropdown);
                setTimeout(() => {
                  document.getElementById('weapon-dropdown').scrollIntoView({
                    behavior: 'smooth',
                    block: 'end',
                  });
                }, 0);
              }}
            >
              <i className='fas fa-angle-right' aria-hidden='true'></i>
              <span>Weapon build</span>
            </div>
            {/* --------------------------- Build UI Here --------------------------- */}
            <div className='build-ui'>
              <WeaponBuilder
                selectedWeaponBuild={selectedWeaponBuild}
                setSelectedWeaponBuild={setSelectedWeaponBuild}
                selectedHero={selectedHero}
                width={width}
              />
            </div>
          </div>
          {/* -------------------------------------------------------------------- */}
          <button onClick={() => addToTeam()}>Add to team</button>
        </React.Fragment>
      )}
    </div>
  );
}

export default HeroBuilder;
