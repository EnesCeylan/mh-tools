import React, { useState } from 'react';
import ArtifactDropdown from './ArtifactDropdown';
import DivinityBuilder from './DivinityBuilder';
import HeroDropdown from './HeroDropdown';
import RuneDropdown from './RuneDropdown';

function TeamBuilderModal({ setModal }) {
  const [heroSelected, setHeroSelected] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  //selections
  const [selectedHero, setSelectedHero] = useState('');
  const [selectedRune, setSelectedRune] = useState('');
  const [selectedArtifact, setSelectedArtifact] = useState('');
  const [selectedNodes, setSelectedNodes] = useState(['', '', '']);

  // build dropdowns
  const [runeDropdown, setRuneDropdown] = useState(false);
  const [artifactDropdown, setArtifactDropdown] = useState(false);
  const [divinityDropdown, setDivinityDropdown] = useState(false);
  const [divinityBuilderDropdown, setDivinityBuilderDropdown] = useState(false);

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
        {!heroSelected && (
          <HeroDropdown
            dropdown={dropdown}
            setDropdown={setDropdown}
            selectedHero={selectedHero}
            setSelectedHero={setSelectedHero}
            setRuneDropdown={setRuneDropdown}
            setArtifactDropdown={setArtifactDropdown}
          />
        )}
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
            <div className='build-category'>
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
          <button>Add to team</button>
        </div>
      </div>
    </div>
  );
}

export default TeamBuilderModal;
